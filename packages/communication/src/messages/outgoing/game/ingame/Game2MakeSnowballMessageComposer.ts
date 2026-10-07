import { IMessageComposer } from '@octane/api';

/** AIR Game2MakeSnowball: turn, subturn. */
export class Game2MakeSnowballMessageComposer implements IMessageComposer<ConstructorParameters<typeof Game2MakeSnowballMessageComposer>>
{
    private _data: ConstructorParameters<typeof Game2MakeSnowballMessageComposer>;

    constructor(turn: number, subturn: number)
    {
        this._data = [ turn, subturn ];
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
