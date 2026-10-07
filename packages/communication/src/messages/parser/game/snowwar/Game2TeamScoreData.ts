import { IMessageDataWrapper } from '@octane/api';
import { Game2TeamPlayerData } from './Game2TeamPlayerData';

/** AIR `Game2TeamScoreData`. */
export class Game2TeamScoreData
{
    public readonly teamReference: number;
    public readonly score: number;
    public readonly players: Game2TeamPlayerData[] = [];

    constructor(wrapper: IMessageDataWrapper)
    {
        this.teamReference = wrapper.readInt();
        this.score = wrapper.readInt();

        let count = wrapper.readInt();

        while(count-- > 0) this.players.push(new Game2TeamPlayerData(this.teamReference, wrapper));
    }
}
