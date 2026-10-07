import { IMessageComposer } from '@octane/api';

/** AIR Game2SetUserMoveTarget: world target (tile * 3200) stamped with the current turn and subturn. */
export class Game2SetUserMoveTargetMessageComposer implements IMessageComposer<ConstructorParameters<typeof Game2SetUserMoveTargetMessageComposer>>
{
    private _data: ConstructorParameters<typeof Game2SetUserMoveTargetMessageComposer>;

    constructor(x: number, y: number, turn: number, subturn: number)
    {
        this._data = [ x, y, turn, subturn ];
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
