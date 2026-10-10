import { IMessageComposer } from '@volt/api';

/** AIR Game2RequestFullStatusUpdate: reason 0 = too far behind, 1 = checksum mismatch, -1 = forced. */
export class Game2RequestFullStatusUpdateMessageComposer implements IMessageComposer<ConstructorParameters<typeof Game2RequestFullStatusUpdateMessageComposer>>
{
    private _data: ConstructorParameters<typeof Game2RequestFullStatusUpdateMessageComposer>;

    constructor(reason: number)
    {
        this._data = [ reason ];
    }

    public getMessageArray()
    {
        return this._data;
    }

    public dispose(): void
    {
        this._data = null;
    }
}
