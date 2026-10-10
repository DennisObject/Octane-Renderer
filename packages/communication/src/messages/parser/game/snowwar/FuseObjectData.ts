import { IMessageDataWrapper, IObjectData } from '@volt/api';
import { FurnitureDataParser } from '../../room/furniture/FurnitureDataParser';

/** AIR `FuseObjectData`: one arena furni of the level. */
export class FuseObjectData
{
    public readonly name: string;
    public readonly id: number;
    public readonly x: number;
    public readonly y: number;
    public readonly xDimension: number;
    public readonly yDimension: number;
    public readonly height: number;
    public readonly direction: number;
    public readonly altitude: number;
    public readonly canStandOn: boolean;
    public readonly stuffData: IObjectData;

    constructor(wrapper: IMessageDataWrapper)
    {
        this.name = wrapper.readString();
        this.id = wrapper.readInt();
        this.x = wrapper.readInt();
        this.y = wrapper.readInt();
        this.xDimension = wrapper.readInt();
        this.yDimension = wrapper.readInt();
        this.height = wrapper.readInt();
        this.direction = wrapper.readInt();
        this.altitude = wrapper.readInt();
        this.canStandOn = wrapper.readBoolean();
        this.stuffData = FurnitureDataParser.parseObjectData(wrapper);
    }
}
