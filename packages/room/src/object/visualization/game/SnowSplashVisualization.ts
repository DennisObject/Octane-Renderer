import { IObjectVisualizationData, IRoomGeometry } from '@octane/api';
import { RoomObjectSpriteVisualization } from '../RoomObjectSpriteVisualization';
import { GetSnowWarGameTexture } from './SnowWarGameAssets';

/** AIR `SnowSplashVisualization`: three splash frames, one per visualization update, then nothing. */
export class SnowSplashVisualization extends RoomObjectSpriteVisualization
{
    private static FRAME_ASSET_NAMES: string[] = [ 'snowball_splash_1', 'snowball_splash_2', 'snowball_splash_3' ];

    private _frameNumber: number = 0;

    public initialize(data: IObjectVisualizationData): boolean
    {
        this.createSprites(1);

        this.getSprite(0).texture = GetSnowWarGameTexture(SnowSplashVisualization.FRAME_ASSET_NAMES[this._frameNumber]);

        return true;
    }

    public get isDone(): boolean
    {
        return (this._frameNumber >= SnowSplashVisualization.FRAME_ASSET_NAMES.length);
    }

    // AIR updates every visualization on each 60 fps render, so the three frames last about 50 ms.
    public update(geometry: IRoomGeometry, time: number, update: boolean, skipUpdate: boolean): void
    {
        if(this.isDone) return;

        this._frameNumber++;

        this.getSprite(0).texture = this.isDone ? null : GetSnowWarGameTexture(SnowSplashVisualization.FRAME_ASSET_NAMES[this._frameNumber]);
        this.updateSpriteCounter++;
    }
}
