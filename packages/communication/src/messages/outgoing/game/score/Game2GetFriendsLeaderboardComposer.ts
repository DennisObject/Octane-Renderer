import { IMessageComposer } from '@octane/api';

/** AIR all-time friends leaderboard page. */
export class Game2GetFriendsLeaderboardComposer implements IMessageComposer<ConstructorParameters<typeof Game2GetFriendsLeaderboardComposer>>
{
    private _data: ConstructorParameters<typeof Game2GetFriendsLeaderboardComposer>;

    constructor(gameTypeId: number, startRank: number, direction: number, viewSize: number, windowSize: number)
    {
        this._data = [ gameTypeId, startRank, direction, viewSize, windowSize ];
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
