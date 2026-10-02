import { IMessageComposer } from '@octane/api';

export class UpdateFloorPropertiesMessageComposer implements IMessageComposer<(string | number)[]>
{
    private _data: (string | number)[];

    constructor(model: string, doorX: number = -1, doorY: number = -1, doorDirection: number = -1, thicknessWall: number = -1, thicknessFloor: number = -1, wallHeight: number = -1)
    {
        if(doorX === -1 && doorY === -1 && doorDirection === -1 && thicknessWall === -1 && thicknessFloor === -1)
        {
            this._data = [model];
            return;
        }

        this._data = [model, doorX, doorY, doorDirection, thicknessWall, thicknessFloor];
        if(wallHeight !== -1) this._data.push(wallHeight);
    }

    public getMessageArray()
    {
        return this._data;
    }

    public dispose(): void
    {
        return;
    }
}
