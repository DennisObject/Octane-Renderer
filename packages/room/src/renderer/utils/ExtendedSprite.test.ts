import { GlRenderTargetAdaptor, Texture, TextureSource, WebGLRenderer } from 'pixi.js';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { ExtendedSprite } from './ExtendedSprite';

const { rendererState } = vi.hoisted(() => ({ rendererState: { value: null } }));

vi.mock('@octane/utils', () => ({
    GetRenderer: () => rendererState.value,
    TextureUtils: {}
}));

const makeTexture = (): Texture => new Texture({ source: new TextureSource({ width: 4, height: 4 }) });

describe('ExtendedSprite texture lifecycle', () =>
{
    it('falls back to Texture.EMPTY when its texture is destroyed', () =>
    {
        const texture = makeTexture();
        const sprite = new ExtendedSprite({ texture });

        expect(sprite.needsUpdate(1, 1)).toBe(true);

        texture.destroy(true);

        expect(sprite.texture).toBe(Texture.EMPTY);
        expect(sprite.needsUpdate(1, 1)).toBe(true);
    });

    it('stops listening to a texture it no longer shows', () =>
    {
        const first = makeTexture();
        const second = makeTexture();
        const sprite = new ExtendedSprite({ texture: first });

        sprite.setTexture(second);

        expect(first.listenerCount('destroy')).toBe(0);
        expect(second.listenerCount('destroy')).toBe(1);

        first.destroy(true);

        expect(sprite.texture).toBe(second);

        sprite.destroy();

        expect(second.listenerCount('destroy')).toBe(0);
        expect(second.destroyed).toBe(false);
    });

    it('never subscribes to Texture.EMPTY', () =>
    {
        const before = Texture.EMPTY.listenerCount('destroy');
        const sprite = new ExtendedSprite();

        sprite.setTexture(makeTexture());
        sprite.setTexture(null);

        expect(sprite.texture).toBe(Texture.EMPTY);
        expect(Texture.EMPTY.listenerCount('destroy')).toBe(before);
    });
});


describe('ExtendedSprite hit testing', () =>
{
    afterEach(() =>
    {
        rendererState.value = null;
    });

    it.each([false, true])('preserves the draw framebuffer when pixel reads fail: %s', (failRead) =>
    {
        const drawFramebuffer = {};
        const textureFramebuffer = {};
        let boundFramebuffer = drawFramebuffer;
        const gl = {
            FRAMEBUFFER: 1,
            FRAMEBUFFER_BINDING: 2,
            RGBA: 3,
            UNSIGNED_BYTE: 4,
            getParameter: () => boundFramebuffer,
            bindFramebuffer: (_target: number, framebuffer: object) =>
            {
                boundFramebuffer = framebuffer;
            },
            readPixels: (_x: number, _y: number, _width: number, _height: number, _format: number, _type: number, pixels: Uint8ClampedArray) =>
            {
                if(failRead) throw new Error('read failed');
                pixels.fill(255);
            }
        };
        const renderer = Object.create(WebGLRenderer.prototype);
        Object.defineProperty(renderer, 'gl', { value: gl });
        renderer.runners = { contextChange: { add: vi.fn() } };
        const adaptor = new GlRenderTargetAdaptor();
        renderer.renderTarget = {
            adaptor,
            getRenderTarget: vi.fn(),
            getGpuRenderTarget: () =>
            {
                // Allocating a Pixi render target can change the native binding.
                gl.bindFramebuffer(gl.FRAMEBUFFER, textureFramebuffer);
                return { resolveTargetFramebuffer: textureFramebuffer };
            }
        };
        adaptor.init(renderer, renderer.renderTarget);
        adaptor.bindFramebuffer(drawFramebuffer);
        rendererState.value = renderer;
        const source = new TextureSource({ width: 4, height: 4 });
        const readHitMap = () => (ExtendedSprite as any).generateHitMapForTextureSource(source);

        if(failRead) expect(readHitMap).toThrow('read failed');
        else
        {
            expect(readHitMap()).toBe(true);
            expect(source.hitMap?.every(value => value === 255)).toBe(true);
        }

        // Pixi may skip this bind if it believes the draw target is already active.
        adaptor.bindFramebuffer(drawFramebuffer);
        expect(boundFramebuffer).toBe(drawFramebuffer);
        source.destroy();
    });
});
