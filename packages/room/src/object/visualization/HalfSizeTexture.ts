import { TextureUtils } from '@octane/utils';
import { Texture } from 'pixi.js';

const RESAMPLED_TEXTURES: Map<string, Texture> = new Map();

/**
 * AIR `resampleBitmapData(bitmap, 0.5)` / the branding 0.5 draw: draws into a round(w/2) x round(h/2) bitmap with smoothing,
 * i.e. bilinear sampling of the premultiplied source at the destination pixel centres.
 */
export const GetHalfSizeTexture = (assetName: string, texture: Texture): Texture =>
{
    const existing = RESAMPLED_TEXTURES.get(assetName);

    if(existing) return existing;

    const { pixels, width, height } = TextureUtils.getPixels(texture);
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

                    const weight = (weightY * (i ? tx : (1 - tx)));
                    const index = (((sampleY * width) + sampleX) * 4);

                    // getPixels reads the GPU texture, which holds premultiplied colour.
                    alpha += (pixels[index + 3] * weight);
                    red += (pixels[index] * weight);
                    green += (pixels[index + 1] * weight);
                    blue += (pixels[index + 2] * weight);
                }
            }

            const index = (((y * targetWidth) + x) * 4);

            if(alpha > 0)
            {
                output.data[index] = Math.round((red * 255) / alpha);
                output.data[index + 1] = Math.round((green * 255) / alpha);
                output.data[index + 2] = Math.round((blue * 255) / alpha);
                output.data[index + 3] = Math.round(alpha);
            }
        }
    }

    context.putImageData(output, 0, 0);

    const resampled = Texture.from(canvas, true);

    resampled.source.scaleMode = 'nearest';

    RESAMPLED_TEXTURES.set(assetName, resampled);

    return resampled;
};
