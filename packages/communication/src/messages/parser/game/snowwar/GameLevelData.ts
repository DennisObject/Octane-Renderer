import { IMessageDataWrapper } from '@octane/api';
import { FuseObjectData } from './FuseObjectData';

/** AIR `GameLevelData`; heightMap rows are separated by `\r`. */
export class GameLevelData
{
    public readonly width: number;
    public readonly height: number;
    public readonly heightMap: string;
    public readonly fuseObjects: FuseObjectData[] = [];

    constructor(wrapper: IMessageDataWrapper)
    {
        this.width = wrapper.readInt();
        this.height = wrapper.readInt();
        this.heightMap = wrapper.readString();

        let count = wrapper.readInt();

        while(count-- > 0) this.fuseObjects.push(new FuseObjectData(wrapper));
    }
}
