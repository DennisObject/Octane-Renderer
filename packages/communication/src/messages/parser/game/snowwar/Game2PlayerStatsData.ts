import { IMessageDataWrapper } from '@volt/api';

/** AIR `Game2PlayerStatsData`. */
export class Game2PlayerStatsData
{
    public readonly score: number;
    public readonly kills: number;
    public readonly deaths: number;
    public readonly snowballHits: number;
    public readonly snowballHitsTaken: number;
    public readonly snowballsThrown: number;
    public readonly snowballsCreated: number;
    public readonly snowballsFromMachine: number;
    public readonly friendlyHits: number;
    public readonly friendlyKills: number;

    constructor(wrapper: IMessageDataWrapper)
    {
        this.score = wrapper.readInt();
        this.kills = wrapper.readInt();
        this.deaths = wrapper.readInt();
        this.snowballHits = wrapper.readInt();
        this.snowballHitsTaken = wrapper.readInt();
        this.snowballsThrown = wrapper.readInt();
        this.snowballsCreated = wrapper.readInt();
        this.snowballsFromMachine = wrapper.readInt();
        this.friendlyHits = wrapper.readInt();
        this.friendlyKills = wrapper.readInt();
    }
}
