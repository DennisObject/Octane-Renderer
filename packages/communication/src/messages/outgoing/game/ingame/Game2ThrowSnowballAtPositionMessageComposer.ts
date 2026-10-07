import { IMessageComposer } from '@octane/api';

/** AIR Game2ThrowSnowballAtPosition: world target (tile * 3200), trajectory, turn, subturn. */
export class Game2ThrowSnowballAtPositionMessageComposer implements IMessageComposer<ConstructorParameters<typeof Game2ThrowSnowballAtPositionMessageComposer>>
{
    private _data: ConstructorParameters<typeof Game2ThrowSnowballAtPositionMessageComposer>;

    constructor(x: number, y: number, trajectory: number, turn: number, subturn: number)
    {
        this._data = [ x, y, trajectory, turn, subturn ];
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
