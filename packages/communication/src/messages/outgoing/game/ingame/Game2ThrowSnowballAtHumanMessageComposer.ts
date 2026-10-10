import { IMessageComposer } from '@volt/api';

/** AIR Game2ThrowSnowballAtHuman: target human game object id, trajectory, turn, subturn. */
export class Game2ThrowSnowballAtHumanMessageComposer implements IMessageComposer<ConstructorParameters<typeof Game2ThrowSnowballAtHumanMessageComposer>>
{
    private _data: ConstructorParameters<typeof Game2ThrowSnowballAtHumanMessageComposer>;

    constructor(targetHumanObjectId: number, trajectory: number, turn: number, subturn: number)
    {
        this._data = [ targetHumanObjectId, trajectory, turn, subturn ];
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
