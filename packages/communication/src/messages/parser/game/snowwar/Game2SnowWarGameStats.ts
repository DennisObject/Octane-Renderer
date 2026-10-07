import { IMessageDataWrapper } from '@octane/api';

/** AIR `Game2SnowWarGameStats`. */
export class Game2SnowWarGameStats
{
    public readonly playerWithMostKills: number;
    public readonly playerWithMostHits: number;

    constructor(wrapper: IMessageDataWrapper)
    {
        this.playerWithMostKills = wrapper.readInt();
        this.playerWithMostHits = wrapper.readInt();
    }
}
