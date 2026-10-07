import { Texture } from 'pixi.js';

/**
 * AIR `resampleBitmapData(bitmap, 0.5)`: a round(w/2) x round(h/2) bitmap drawn with smoothing, i.e. bilinear sampling
 * of the premultiplied source at the destination pixel centres. Reads the texture's loaded image source on the CPU
 * (no GPU readback); returns null when the source is not a drawable image.
 */
export const CreateHalfSizeTexture = (texture: Texture): Texture =>
{
    const resource = texture?.source?.resource as CanvasImageSource;

    if(!resource || (typeof document === 'undefined')) return null;

    const frame = texture.frame;
    const width = Math.max(1, Math.round(frame.width));
    const height = Math.max(1, Math.round(frame.height));
    const sourceCanvas = document.createElement('canvas');

    sourceCanvas.width = width;
    sourceCanvas.height = height;

    const sourceContext = sourceCanvas.getContext('2d', { willReadFrequently: true });

    let pixels: Uint8ClampedArray = null;

    // A cross-origin image without CORS taints the canvas, so its pixels cannot be read.
    try
    {
        sourceContext.drawImage(resource, frame.x, frame.y, width, height, 0, 0, width, height);
        pixels = sourceContext.getImageData(0, 0, width, height).data;
    }
    catch
    {
        return null;
    }

    const targetWidth = Math.max(1, Math.round(width * 0.5));
    const targetHeight = Math.max(1, Math.round(height * 0.5));
    const scaleX = (targetWidth / width);
    const scaleY = (targetHeight / height);
    const canvas = document.createElement('canvas');

    canvas.width = targetWidth;
    canvas.height = targetHeight;

    const context = canvas.getContext('2d');
    const output = context.createImageData(targetWidth, targetHeight);

    for(let y = 0; y < targetHeight; y++)
    {
        const sourceY = (((y + 0.5) / scaleY) - 0.5);
        const y0 = Math.floor(sourceY);
        const ty = (sourceY - y0);

        for(let x = 0; x < targetWidth; x++)
        {
            const sourceX = (((x + 0.5) / scaleX) - 0.5);
            const x0 = Math.floor(sourceX);
            const tx = (sourceX - x0);

            let alpha = 0;
            let red = 0;
            let green = 0;
            let blue = 0;

            for(let j = 0; j < 2; j++)
            {
                const sampleY = (y0 + j);

                if((sampleY < 0) || (sampleY >= height)) continue;

                const weightY = (j ? ty : (1 - ty));

                for(let i = 0; i < 2; i++)
                {
                    const sampleX = (x0 + i);

                    if((sampleX < 0) || (sampleX >= width)) continue;

                    const index = (((sampleY * width) + sampleX) * 4);
                    const sampleAlpha = (pixels[index + 3] * weightY * (i ? tx : (1 - tx)));

                    // getImageData is straight alpha; weighting the colour by alpha averages premultiplied values.
                    alpha += sampleAlpha;
                    red += (pixels[index] * sampleAlpha);
                    green += (pixels[index + 1] * sampleAlpha);
                    blue += (pixels[index + 2] * sampleAlpha);
                }
            }

            if(alpha <= 0) continue;

            const index = (((y * targetWidth) + x) * 4);

            output.data[index] = Math.round(red / alpha);
            output.data[index + 1] = Math.round(green / alpha);
            output.data[index + 2] = Math.round(blue / alpha);
            output.data[index + 3] = Math.round(alpha);
        }
    }

    context.putImageData(output, 0, 0);

    const resampled = Texture.from(canvas, true);

    resampled.source.scaleMode = 'nearest';

    return resampled;
};

/** Bounded cache of half-size textures keyed by asset name; evicted textures are destroyed. */
export class HalfSizeTextureCache
{
    private _textures: Map<string, Texture> = new Map();
    private _pending: Set<string> = new Set();
    private _failed: Set<string> = new Set();

    constructor(private readonly _maximumSize: number)
    {}

    /** The cached texture, or null after scheduling its resample outside the render path (ready on a later update). */
    public getTexture(name: string, texture: Texture): Texture
    {
        const existing = this._textures.get(name);

        if(existing)
        {
            this._textures.delete(name);
            this._textures.set(name, existing);

            return existing;
        }

        if(!this._pending.has(name) && !this._failed.has(name))
        {
            this._pending.add(name);

            setTimeout(() =>
            {
                this._pending.delete(name);

                const resampled = CreateHalfSizeTexture(texture);

                if(resampled) this.add(name, resampled);
                else this._failed.add(name);
            }, 0);
        }

        return null;
    }

    private add(name: string, texture: Texture): void
    {
        this._textures.set(name, texture);

        while(this._textures.size > this._maximumSize)
        {
            const [ oldestName, oldest ] = this._textures.entries().next().value;

            this._textures.delete(oldestName);
            oldest.destroy(true);
        }
    }
}
