import { IMessageDataWrapper, IMessageParser } from '@octane/api';
import { GameLobbyPlayerData } from '../snowwar/GameLobbyPlayerData';

/** AIR UserJoinedGame. */
export class Game2UserJoinedGameMessageParser implements IMessageParser
{
    private _user: GameLobbyPlayerData;
    private _wasTeamSwitched: boolean;

    public flush(): boolean
    {
        this._user = null;
        this._wasTeamSwitched = false;

        return true;
    }

    public parse(wrapper: IMessageDataWrapper): boolean
    {
        if(!wrapper) return false;

        this._user = new GameLobbyPlayerData(wrapper);
        this._wasTeamSwitched = wrapper.readBoolean();

        return true;
    }

    public get user(): GameLobbyPlayerData
    {
        return this._user;
    }

    public get wasTeamSwitched(): boolean
    {
        return this._wasTeamSwitched;
    }
}
