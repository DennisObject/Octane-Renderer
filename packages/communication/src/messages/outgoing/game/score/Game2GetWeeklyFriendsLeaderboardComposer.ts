import { IMessageComposer } from '@volt/api';

/** AIR weekly friends leaderboard page. */
export class Game2GetWeeklyFriendsLeaderboardComposer implements IMessageComposer<ConstructorParameters<typeof Game2GetWeeklyFriendsLeaderboardComposer>>
{
    private _data: ConstructorParameters<typeof Game2GetWeeklyFriendsLeaderboardComposer>;

    constructor(gameTypeId: number, weekOffset: number, startRank: number, direction: number, viewSize: number, windowSize: number)
    {
        this._data = [ gameTypeId, weekOffset, startRank, direction, viewSize, windowSize ];
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
