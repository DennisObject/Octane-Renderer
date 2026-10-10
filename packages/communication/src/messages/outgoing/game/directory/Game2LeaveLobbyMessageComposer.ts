import { IMessageComposer } from '@volt/api';

/** AIR leave lobby / queue (class_3513). */
export class Game2LeaveLobbyMessageComposer implements IMessageComposer<ConstructorParameters<typeof Game2LeaveLobbyMessageComposer>>
{
    private _data: ConstructorParameters<typeof Game2LeaveLobbyMessageComposer>;

    constructor()
    {
        this._data = [];
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
