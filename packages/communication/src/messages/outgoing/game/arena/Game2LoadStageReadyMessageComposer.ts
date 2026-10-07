import { IMessageComposer } from '@octane/api';

/** AIR Game2LoadStageReady: sent with 100 once the arena room objects are initialised. */
export class Game2LoadStageReadyMessageComposer implements IMessageComposer<ConstructorParameters<typeof Game2LoadStageReadyMessageComposer>>
{
    private _data: ConstructorParameters<typeof Game2LoadStageReadyMessageComposer>;

    constructor(percent: number)
    {
        this._data = [ percent ];
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
