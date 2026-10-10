import { IMessageDataWrapper } from '@volt/api';
import { GameLobbyPlayerData } from './GameLobbyPlayerData';

/** AIR `GameLobbyData`. */
export class GameLobbyData
{
    public readonly gameId: number;
    public readonly levelName: string;
    public readonly gameType: number;
    public readonly fieldType: number;
    public readonly numberOfTeams: number;
    public readonly maximumPlayers: number;
    public readonly owningPlayerName: string;
    public readonly levelEntryId: number;
    public readonly players: GameLobbyPlayerData[] = [];

    constructor(wrapper: IMessageDataWrapper)
    {
        this.gameId = wrapper.readInt();
        this.levelName = wrapper.readString();
        this.gameType = wrapper.readInt();
        this.fieldType = wrapper.readInt();
        this.numberOfTeams = wrapper.readInt();
        this.maximumPlayers = wrapper.readInt();
        this.owningPlayerName = wrapper.readString();
        this.levelEntryId = wrapper.readInt();

        let count = wrapper.readInt();

        while(count-- > 0) this.players.push(new GameLobbyPlayerData(wrapper));
    }
}
