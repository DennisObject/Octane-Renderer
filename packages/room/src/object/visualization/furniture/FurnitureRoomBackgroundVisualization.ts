import { Texture } from 'pixi.js';
import { DirectionalOffsetData } from '../data';
import { GetHalfSizeTexture } from '../HalfSizeTexture';
import { FurnitureBrandedImageVisualization } from './FurnitureBrandedImageVisualization';

export class FurnitureRoomBackgroundVisualization extends FurnitureBrandedImageVisualization
{
    private static readonly BRANDED_IMAGE_LAYER_DEPTH_BIAS: number = 0.01;

    private _imageOffsets: Map<number, DirectionalOffsetData> = null;

    protected imageReady(texture: Texture, imageUrl: string): void
    {
        super.imageReady(texture, imageUrl);

        if(!texture) return;

        // AIR FurnitureRoomBackgroundVisualization: offsets for the full image and for its size 32 half.
        this._imageOffsets = new Map([ [ 1, this.createImageOffset(texture.width, texture.height) ], [ 0.5, this.createImageOffset((texture.width / 2), (texture.height / 2)) ] ]);
    }

    private createImageOffset(width: number, height: number): DirectionalOffsetData
    {
        const offsetData = new DirectionalOffsetData();

        offsetData.setDirection(1, 0, -height);
        offsetData.setDirection(3, 0, 0);
        offsetData.setDirection(5, -width, 0);
        offsetData.setDirection(7, -width, -height);
        offsetData.setDirection(4, (-width / 2), (-height / 2));

        return offsetData;
    }

    /** AIR FurnitureRoomBrandingVisualization: a size 32 visualization draws the image at half size unless its url says noscale. */
    private getImageFactor(scale: number): number
    {
        const imageUrl = (this._imageUrl ?? '');

        if(imageUrl.indexOf('noscale') >= 0) return 1;

        return ((this.getValidSize(scale) === 32) || (imageUrl.indexOf('force32') >= 0)) ? 0.5 : 1;
    }

    private getScaledOffset(offset: number, scale: number): number
    {
        return ((offset * scale) / 64);
    }

    protected getLayerXOffset(scale: number, direction: number, layerId: number): number
    {
        const offset = this._imageOffsets?.get(this.getImageFactor(scale))?.getXOffset(direction, 0);

        if(offset !== undefined) return offset + this.getScaledOffset(this._offsetX, scale);

        return super.getLayerXOffset(scale, direction, layerId) + this.getScaledOffset(this._offsetX, scale);
    }

    protected getLayerYOffset(scale: number, direction: number, layerId: number): number
    {
        const offset = this._imageOffsets?.get(this.getImageFactor(scale))?.getYOffset(direction, 0);

        if(offset !== undefined) return offset + this.getScaledOffset(this._offsetY, scale);

        return super.getLayerYOffset(scale, direction, layerId) + this.getScaledOffset(this._offsetY, scale);
    }

    protected updateSprite(scale: number, layerId: number): void
    {
        super.updateSprite(scale, layerId);

        if(this.getLayerTag(scale, this._direction, layerId) !== FurnitureBrandedImageVisualization.BRANDED_IMAGE) return;

        const sprite = this.getSprite(layerId);

        if(!sprite || !sprite.texture || (this.getImageFactor(scale) === 1)) return;

        sprite.texture = GetHalfSizeTexture(this._imageUrl, sprite.texture);
    }


    protected getLayerAlpha(scale: number, direction: number, layerId: number): number
    {
        let alpha = super.getLayerAlpha(scale, direction, layerId);

        if(this.shouldSuppressInkLayer(scale, direction, layerId)) alpha = 0;

        return alpha;
    }

    private shouldSuppressInkLayer(scale: number, direction: number, layerId: number): boolean
    {
        if(this.getLayerTag(scale, direction, layerId) === FurnitureBrandedImageVisualization.BRANDED_IMAGE) return false;

        return (this.getLayerBlendMode(scale, direction, layerId) !== 'normal');
    }

    protected getLayerZOffset(scale: number, direction: number, layerId: number): number
    {
        let zOffset = (super.getLayerZOffset(scale, direction, layerId) + (-(this._offsetZ)));

        if(this.getLayerTag(scale, direction, layerId) === FurnitureBrandedImageVisualization.BRANDED_IMAGE)
        {
            // The parent (FurnitureBrandedImageVisualization) now ADDS offsetZ to the
            // branded layer as a z-index (for the MPU/billboard editor). The room
            // background instead uses offsetZ as an INVERSE depth push — the classic
            // "play with Z to make the floor/walls go transparent" trick — so cancel
            // the parent's +offsetZ to restore the original net (base - offsetZ).
            zOffset += (-(this._offsetZ));
            zOffset += FurnitureRoomBackgroundVisualization.BRANDED_IMAGE_LAYER_DEPTH_BIAS;
        }

        return zOffset;
    }

    protected getLayerIgnoreMouse(scale: number, direction: number, layerId: number): boolean
    {
        return true;
    }
}
