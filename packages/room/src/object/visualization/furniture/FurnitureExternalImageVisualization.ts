import { IGraphicAsset, RoomObjectVariable } from '@octane/api';
import { Matrix, RenderTexture, Texture } from 'pixi.js';
import { FurnitureDynamicThumbnailVisualization } from './FurnitureDynamicThumbnailVisualization';

// Server-minted camera files only, loaded from the hotel origin like the photo viewer. The asset
// host in images.url does not serve camera media, and furni data never chooses the host.
const CAMERA_MEDIA_PATH = /^\/camera\/(?:[0-9a-f]{32}|[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})(?:_small)?\.png$/i;

const cameraMediaPath = (value: unknown): string =>
{
    if(typeof value !== 'string' || !CAMERA_MEDIA_PATH.test(value)) return null;

    return value;
};

const thumbnailPath = (value: string): string =>
{
    if(/_small\.png$/i.test(value)) return value;

    return value.replace(/\.png$/i, '_small.png');
};

export class FurnitureExternalImageVisualization extends FurnitureDynamicThumbnailVisualization
{
    private _url: string;

    constructor()
    {
        super();

        this._url = null;
    }

    protected generateTransformedThumbnail(texture: Texture, asset: IGraphicAsset): Texture
    {
        let outlineTexture: RenderTexture = null;

        if(this._hasOutline)
        {
            outlineTexture = this.buildOutlinedTexture(texture);
            texture = outlineTexture;
        }

        texture.source.scaleMode = 'linear';

        const texW = texture.width;
        const texH = texture.height;
        const scale = Math.min(asset.width / texW, asset.height / texH);

        const matrix = new Matrix();
        matrix.a = scale;
        matrix.c = 0;
        matrix.d = scale;
        matrix.tx = 0;
        matrix.ty = 0;

        if(this.direction === 2)
        {
            matrix.b = -(0.5 * scale);
        }
        else if(this.direction === 0 || this.direction === 4)
        {
            matrix.b = 0.5 * scale;
        }
        else
        {
            matrix.b = 0;
        }

        const renderTexture = this.renderThumbnailWithMatrix(texture, matrix);

        if(outlineTexture) outlineTexture.destroy(true);

        return renderTexture;
    }

    protected getThumbnailURL(): string
    {
        if(!this.object) return null;

        if(this._url) return this._url;

        const jsonString = this.object.model.getValue<string>(RoomObjectVariable.FURNITURE_DATA);

        if(!jsonString || jsonString === '') return null;

        let parsed: { w?: unknown } = null;

        try
        {
            parsed = JSON.parse(jsonString);
        }
        catch
        {
            return null;
        }

        if(!parsed || (typeof parsed !== 'object')) return null;

        const photo = cameraMediaPath(parsed.w);
        const thumbnail = photo && cameraMediaPath(thumbnailPath(photo));

        if(!thumbnail) return null;

        this._url = thumbnail;

        return this._url;
    }
}