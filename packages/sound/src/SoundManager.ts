import { IAdvancedMap, IMusicController, IVoltEvent, ISoundManager, ISoundVolumesSnapshot } from '@volt/api';
import { GetConfiguration } from '@volt/configuration';
import { GetEventDispatcher, VoltEvent, VoltEventType, VoltSettingsEvent, VoltSoundEvent, RoomEngineEvent, RoomEngineObjectEvent, RoomEngineSamplePlaybackEvent } from '@volt/events';
import { AdvancedMap, VoltLogger } from '@volt/utils';
import { MusicController } from './music/MusicController';

export class SoundManager implements ISoundManager
{
    private _volumeSystem: number = 0.5;
    private _volumeFurni: number = 0.5;
    private _volumeTrax: number = 0.5;
    private _volumesSnapshot: Readonly<ISoundVolumesSnapshot> | null = null;

    private _internalSamples: IAdvancedMap<string, HTMLAudioElement> = new AdvancedMap();
    private _furniSamples: IAdvancedMap<number, HTMLAudioElement> = new AdvancedMap();
    private _furnitureBeingPlayed: IAdvancedMap<number, number> = new AdvancedMap();

    private _musicController: IMusicController = new MusicController();
    private _eventCallback: (event: IVoltEvent) => void = null;

    public async init(): Promise<void>
    {
        this._musicController.init();

        // Store callback for cleanup
        this._eventCallback = (event: IVoltEvent) => this.onEvent(event);

        GetEventDispatcher().addEventListener<RoomEngineSamplePlaybackEvent>(RoomEngineSamplePlaybackEvent.PLAY_SAMPLE, this._eventCallback);
        GetEventDispatcher().addEventListener<RoomEngineObjectEvent>(RoomEngineObjectEvent.REMOVED, this._eventCallback);
        GetEventDispatcher().addEventListener<RoomEngineEvent>(RoomEngineEvent.DISPOSED, this._eventCallback);
        GetEventDispatcher().addEventListener<VoltSettingsEvent>(VoltSettingsEvent.SETTINGS_UPDATED, this._eventCallback);
        GetEventDispatcher().addEventListener<VoltSoundEvent>(VoltSoundEvent.PLAY_SOUND, this._eventCallback);
    }

    public dispose(): void
    {
        if(this._eventCallback)
        {
            GetEventDispatcher().removeEventListener(RoomEngineSamplePlaybackEvent.PLAY_SAMPLE, this._eventCallback);
            GetEventDispatcher().removeEventListener(RoomEngineObjectEvent.REMOVED, this._eventCallback);
            GetEventDispatcher().removeEventListener(RoomEngineEvent.DISPOSED, this._eventCallback);
            GetEventDispatcher().removeEventListener(VoltSettingsEvent.SETTINGS_UPDATED, this._eventCallback);
            GetEventDispatcher().removeEventListener(VoltSoundEvent.PLAY_SOUND, this._eventCallback);
            this._eventCallback = null;
        }

        // Stop all playing samples
        this._furnitureBeingPlayed.getKeys().forEach((objectId: number) =>
        {
            this.stopFurniSample(objectId);
        });

        // Clear all samples
        this._internalSamples.dispose();
        this._furniSamples.dispose();
        this._furnitureBeingPlayed.dispose();
    }

    private onEvent(event: IVoltEvent)
    {
        switch(event.type)
        {
            case RoomEngineSamplePlaybackEvent.PLAY_SAMPLE: {
                const castedEvent = (event as RoomEngineSamplePlaybackEvent);

                this.playFurniSample(castedEvent.objectId, castedEvent.sampleId, castedEvent.pitch);
                return;
            }
            case RoomEngineObjectEvent.REMOVED: {
                const castedEvent = (event as RoomEngineObjectEvent);

                this.stopFurniSample(castedEvent.objectId);
                return;
            }
            case RoomEngineEvent.DISPOSED: {
                this._furnitureBeingPlayed.getKeys().forEach((objectId: number) =>
                {
                    this.stopFurniSample(objectId);
                });
                return;
            }
            case VoltSettingsEvent.SETTINGS_UPDATED: {
                const castedEvent = (event as VoltSettingsEvent);

                const nextSystem = (castedEvent.volumeSystem / 100);
                const nextFurni = (castedEvent.volumeFurni / 100);
                const nextTrax = (castedEvent.volumeTrax / 100);

                const volumeSystemUpdated = nextSystem !== this._volumeSystem;
                const volumeFurniUpdated = nextFurni !== this._volumeFurni;
                const volumeTraxUpdated = nextTrax !== this._volumeTrax;

                this._volumeSystem = nextSystem;
                this._volumeFurni = nextFurni;
                this._volumeTrax = nextTrax;

                if(volumeFurniUpdated) this.updateFurniSamplesVolume(this._volumeFurni);

                if(volumeTraxUpdated) this._musicController?.updateVolume(this._volumeTrax);

                if(volumeSystemUpdated || volumeFurniUpdated || volumeTraxUpdated) this.invalidateVolumesSnapshot();

                return;
            }
            case VoltSoundEvent.PLAY_SOUND: {
                const castedEvent = (event as VoltSoundEvent);

                this.playInternalSample(castedEvent.sampleCode);
                return;
            }
        }
    }

    private playSample(sample: HTMLAudioElement, volume: number, pitch: number = 1): void
    {
        sample.volume = volume;
        sample.currentTime = 0;

        try
        {
            sample.play();
        }
        catch (e)
        {
            VoltLogger.error(e);
        }
    }

    private playInternalSample(code: string): void
    {
        let sample = this._internalSamples.getValue(code);

        if(!sample)
        {
            const sampleUrl = GetConfiguration().getValue<string>('sounds.url');

            sample = new Audio(sampleUrl.replace('%sample%', code));
            this._internalSamples.add(code, sample);
        }

        this.playSample(sample, this._volumeSystem);
    }

    private playFurniSample(objectId: number, code: number, pitch: number): void
    {
        let sample = this._furniSamples.getValue(code);

        if(!sample)
        {
            const sampleUrl = GetConfiguration().getValue<string>('external.samples.url');

            sample = new Audio(sampleUrl.replace('%sample%', code.toString()));
            this._furniSamples.add(code, sample);
        }

        if(!this._furnitureBeingPlayed.hasKey(objectId)) this._furnitureBeingPlayed.add(objectId, code);

        sample.onended = event => this.stopFurniSample(objectId);

        sample.onpause = event => this.stopFurniSample(objectId);

        sample.onerror = event => this.stopFurniSample(objectId);

        this.playSample(sample, this._volumeFurni, pitch);
    }

    private stopInternalSample(code: string): void
    {
        const sample = this._internalSamples.getValue(code);

        if(!sample) return;

        try
        {
            sample.pause();
        }
        catch (e)
        {
            VoltLogger.error(e);
        }
    }

    private stopFurniSample(objectId: number): void
    {
        const furnitureBeingPlayed = this._furnitureBeingPlayed.getValue(objectId);

        if(!furnitureBeingPlayed) return;

        const sample = this._furniSamples.getValue(furnitureBeingPlayed);

        this._furnitureBeingPlayed.remove(objectId);

        if(!sample) return;

        try
        {
            sample.pause();
        }
        catch (e)
        {
            VoltLogger.error(e);
        }
    }

    private updateInternalSamplesVolume(volume: number): void
    {
        this._internalSamples.getValues().forEach((sample: HTMLAudioElement) =>
        {
            sample.volume = volume;
        });
    }

    private updateFurniSamplesVolume(volume: number): void
    {
        this._furniSamples.getValues().forEach((sample: HTMLAudioElement) =>
        {
            sample.volume = volume;
        });
    }

    public get traxVolume(): number
    {
        return this._volumeTrax;
    }

    public get systemVolume(): number
    {
        return this._volumeSystem;
    }

    public get furniVolume(): number
    {
        return this._volumeFurni;
    }

    public get musicController(): IMusicController
    {
        return this._musicController;
    }

    private invalidateVolumesSnapshot(): void
    {
        this._volumesSnapshot = null;

        GetEventDispatcher().dispatchEvent(new VoltEvent(VoltEventType.SOUND_VOLUMES_UPDATED));
    }

    public getVolumesSnapshot(): Readonly<ISoundVolumesSnapshot>
    {
        if(this._volumesSnapshot) return this._volumesSnapshot;

        this._volumesSnapshot = Object.freeze<ISoundVolumesSnapshot>({
            system: this._volumeSystem,
            furni: this._volumeFurni,
            trax: this._volumeTrax
        });

        return this._volumesSnapshot;
    }
}
