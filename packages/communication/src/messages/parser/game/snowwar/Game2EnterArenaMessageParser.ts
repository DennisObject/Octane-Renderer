import { IMessageDataWrapper, IMessageParser } from '@volt/api';
import { Game2PlayerData } from './Game2PlayerData';
import { GameLevelData } from './GameLevelData';

/** AIR EnterArena. */
export class Game2EnterArenaMessageParser implements IMessageParser
{
    private _gameType: number;
    private _fieldType: number;
    private _numberOfTeams: number;
    private _players: Game2PlayerData[];
    private _gameLevel: GameLevelData;

    public flush(): boolean
    {
        this._gameType = 0;
        this._fieldType = 0;
        this._numberOfTeams = 0;
        this._players = [];
        this._gameLevel = null;

        return true;
    }

    public parse(wrapper: IMessageDataWrapper): boolean
    {
        if(!wrapper) return false;

        this._gameType = wrapper.readInt();
        this._fieldType = wrapper.readInt();
        this._numberOfTeams = wrapper.readInt();

        let count = wrapper.readInt();

        while(count-- > 0) this._players.push(new Game2PlayerData(wrapper));

        this._gameLevel = new GameLevelData(wrapper);

        return true;
    }

    public get gameType(): number
    {
        return this._gameType;
    }

    public get fieldType(): number
    {
        return this._fieldType;
    }

    public get numberOfTeams(): number
    {
        return this._numberOfTeams;
    }

    public get players(): Game2PlayerData[]
    {
        return this._players;
    }

    public get gameLevel(): GameLevelData
    {
        return this._gameLevel;
    }
}
