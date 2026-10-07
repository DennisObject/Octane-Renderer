import { IMessageComposer } from '@octane/api';

/** AIR quick join ("Play", class_2112). */
export class Game2QuickJoinMessageComposer implements IMessageComposer<ConstructorParameters<typeof Game2QuickJoinMessageComposer>>
{
    private _data: ConstructorParameters<typeof Game2QuickJoinMessageComposer>;

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
