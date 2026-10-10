import { IMessageDataWrapper, IMessageParser } from '@volt/api';
import { GameLobbyData } from '../snowwar/GameLobbyData';

/** AIR GameCreated. */
export class Game2GameCreatedMessageParser implements IMessageParser
{
    private _gameLobbyData: GameLobbyData;

    public flush(): boolean
    {
        this._gameLobbyData = null;

        return true;
    }

    public parse(wrapper: IMessageDataWrapper): boolean
    {
        if(!wrapper) return false;

        this._gameLobbyData = new GameLobbyData(wrapper);

        return true;
    }

    public get gameLobbyData(): GameLobbyData
    {
        return this._gameLobbyData;
    }
}
