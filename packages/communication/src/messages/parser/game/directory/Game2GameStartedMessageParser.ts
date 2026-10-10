import { IMessageDataWrapper, IMessageParser } from '@volt/api';
import { GameLobbyData } from '../snowwar/GameLobbyData';

/** AIR GameStarted: the loading screen opens. */
export class Game2GameStartedMessageParser implements IMessageParser
{
    private _lobbyData: GameLobbyData;

    public flush(): boolean
    {
        this._lobbyData = null;

        return true;
    }

    public parse(wrapper: IMessageDataWrapper): boolean
    {
        if(!wrapper) return false;

        this._lobbyData = new GameLobbyData(wrapper);

        return true;
    }

    public get lobbyData(): GameLobbyData
    {
        return this._lobbyData;
    }
}
