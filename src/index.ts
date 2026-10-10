import { GetRoomEngine } from '@volt/room';
import { GetDesiredScaleMode, GetRenderer, StartDprRenderingModeWatcher } from '@volt/utils';
import { BrowserAdapter, DOMAdapter, TextureSource } from 'pixi.js';
import './pixi-augmentations';

StartDprRenderingModeWatcher();
DOMAdapter.set(BrowserAdapter);

if(typeof window !== 'undefined')
{
    (window as any).__voltRenderDebug = (): string =>
    {
        const out: any = {
            dpr: window.devicePixelRatio,
            desiredScaleMode: GetDesiredScaleMode(),
            defaultScaleMode: TextureSource.defaultOptions.scaleMode
        };

        try
        {
            const renderer: any = GetRenderer();
            const canvas = renderer?.canvas;

            out.renderer = renderer ? {
                res: renderer.resolution,
                screen: [ renderer.screen.width, renderer.screen.height ],
                attr: canvas ? [ canvas.width, canvas.height ] : null,
                css: canvas ? [ canvas.style.width, canvas.style.height ] : null
            } : null;

            const census: Record<string, number> = {};

            for(const source of (renderer?.texture?.managedTextures ?? []))
            {
                const key = `${ source?.style?.scaleMode ?? '?' }${ source?.voltFixedScaleMode ? '/fixed' : '' }`;

                census[key] = (census[key] ?? 0) + 1;
            }

            out.textures = census;

            const engine: any = GetRoomEngine();
            const roomId = engine?._activeRoomId ?? -1;
            const roomCanvas = engine?.getRoomInstanceRenderingCanvas?.(roomId, 1);
            const geometry = engine?.getRoomInstanceGeometry?.(roomId, 1);

            out.room = roomCanvas ? {
                size: [ roomCanvas.width, roomCanvas.height ],
                scale: roomCanvas.scale,
                offset: [ roomCanvas.screenOffsetX, roomCanvas.screenOffsetY ],
                geometryScale: geometry?.scale ?? null
            } : null;
        }
        catch (e)
        {
            out.error = String(e);
        }

        return JSON.stringify(out);
    };
}

export * from '@volt/api';
export * from '@volt/assets';
export * from '@volt/avatar';
export * from '@volt/camera';
export * from '@volt/communication';
export * from '@volt/configuration';
export * from '@volt/events';
export * from '@volt/localization';
export * from '@volt/room';
export * from '@volt/session';
export * from '@volt/sound';
export * from '@volt/utils';
export * from './DevTools';
export * from './pixi-proxy';
