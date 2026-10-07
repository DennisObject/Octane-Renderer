import { IMessageComposer } from '@octane/api';

/** Plus arena voting (CONTRACT §8): the lobby member's vote for an offered arena field type. */
export class Game2VoteArenaMessageComposer implements IMessageComposer<ConstructorParameters<typeof Game2VoteArenaMessageComposer>>
{
    private _data: ConstructorParameters<typeof Game2VoteArenaMessageComposer>;

    constructor(fieldType: number)
    {
        this._data = [ fieldType ];
    }

    dispose(): void
    {
        this._data = null;
    }

    public getMessageArray()
    {
        return this._data;
    }
}
