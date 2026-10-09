import { IMessageComposer } from '@octane/api';

export class WiredVariableInspectionRequestComposer implements IMessageComposer<number[]>
{
    private _data: number[];

    constructor(requestId: number, roomId: number, positiveWallEntityId: number)
    {
        if(![requestId, roomId, positiveWallEntityId].every(value => Number.isInteger(value) && value > 0 && value <= 2147483647))
        {
            throw new RangeError('Invalid wall inspection routing');
        }
        this._data = [1, requestId, roomId, 1, positiveWallEntityId, 1];
    }

    public getMessageArray(): number[] { return this._data; }
    public dispose(): void { }
}
