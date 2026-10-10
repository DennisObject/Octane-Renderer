import { IAssetData, IObjectVisualizationData } from '@volt/api';

/** The SnowWar game objects draw embedded bitmaps, so they carry no asset data. */
export class SnowWarVisualizationData implements IObjectVisualizationData
{
    public initialize(asset: IAssetData): boolean
    {
        return true;
    }

    public dispose(): void
    {
    }
}
