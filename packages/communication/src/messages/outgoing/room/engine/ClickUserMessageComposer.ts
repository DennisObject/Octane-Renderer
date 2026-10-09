import { IMessageComposer } from '@octane/api';

export class ClickUserMessageComposer implements IMessageComposer<number[]>
{
    private _data: number[];

    constructor(roomUnitId: number, roomId?: number, requestId?: number)
    {
        this._data = [ roomUnitId ];
        if(requestId !== undefined) this._data.push(1, roomId, requestId);
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
