import { IMessageComposer } from '@octane/api';

/** AIR all-time leaderboard page (startRank -1 = around me, direction 0 down / 1 up). */
export class Game2GetTotalLeaderboardComposer implements IMessageComposer<ConstructorParameters<typeof Game2GetTotalLeaderboardComposer>>
{
    private _data: ConstructorParameters<typeof Game2GetTotalLeaderboardComposer>;

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
