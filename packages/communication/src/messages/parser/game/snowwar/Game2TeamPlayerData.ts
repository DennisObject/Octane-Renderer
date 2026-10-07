import { IMessageDataWrapper } from '@octane/api';
import { Game2PlayerStatsData } from './Game2PlayerStatsData';

/** AIR `Game2TeamPlayerData`. */
export class Game2TeamPlayerData
{
    public readonly userName: string;
    public readonly userId: number;
    public readonly figure: string;
    public readonly gender: string;
    public readonly score: number;
    public readonly playerStats: Game2PlayerStatsData;

    constructor(public readonly teamId: number, wrapper: IMessageDataWrapper)
    {
        this.userName = wrapper.readString();
        this.userId = wrapper.readInt();
        this.figure = wrapper.readString();
        this.gender = wrapper.readString();
        this.score = wrapper.readInt();
        this.playerStats = new Game2PlayerStatsData(wrapper);
    }
}
