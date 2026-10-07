import { IObjectVisualizationData, IRoomGeometry, IRoomObjectSprite } from '@octane/api';
import { RoomObjectSpriteVisualization } from '../RoomObjectSpriteVisualization';
import { GetSnowWarGameTexture } from './SnowWarGameAssets';

/** AIR `SnowballVisualization`: the ball plus a shadow dropped to the floor by the ball's height. */
export class SnowballVisualization extends RoomObjectSpriteVisualization
{
    private static SNOWBALL_ASSET_NAME: string = 'snowball_small_png';
    private static SNOWBALL_SHADOW_ASSET_NAME: string = 'snowball_small_shadow_png';
    private static SHADOW_OFFSET_PER_HEIGHT: number = 16;

    private _shadow: IRoomObjectSprite = null;

    public initialize(data: IObjectVisualizationData): boolean
    {
        this.createSprites(2);

        this._shadow = this.getSprite(1);
        this._shadow.alpha = 100;
        this._shadow.relativeDepth = 1;

        this.updateTextures();

        return true;
    }

    public update(geometry: IRoomGeometry, time: number, update: boolean, skipUpdate: boolean): void
    {
        if(!this.object || !this._shadow) return;

        const offsetY = (this.object.getLocation().z * SnowballVisualization.SHADOW_OFFSET_PER_HEIGHT);

        if(!this.updateTextures() && (offsetY === this._shadow.offsetY)) return;

        this._shadow.offsetY = offsetY;
        this._shadow.alpha = Math.max(0, (100 - (offsetY / 10)));
        this.updateSpriteCounter++;
    }

    /** True when a texture arrived; the embedded bitmaps decode a frame after their first use. */
    private updateTextures(): boolean
    {
        const ball = this.getSprite(0);
        let changed = false;

        if(ball && !ball.texture)
        {
            ball.texture = GetSnowWarGameTexture(SnowballVisualization.SNOWBALL_ASSET_NAME);
            changed = !!ball.texture;
        }

        if(this._shadow && !this._shadow.texture)
        {
            this._shadow.texture = GetSnowWarGameTexture(SnowballVisualization.SNOWBALL_SHADOW_ASSET_NAME);
            changed = (changed || !!this._shadow.texture);
        }

        return changed;
    }

    public dispose(): void
    {
        this._shadow = null;

        super.dispose();
    }
}
