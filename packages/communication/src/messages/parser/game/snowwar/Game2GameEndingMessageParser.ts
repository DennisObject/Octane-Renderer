import { IMessageDataWrapper, IMessageParser } from '@volt/api';
import { Game2GameResult } from './Game2GameResult';
import { Game2SnowWarGameStats } from './Game2SnowWarGameStats';
import { Game2TeamScoreData } from './Game2TeamScoreData';

/** AIR GameEnding. */
export class Game2GameEndingMessageParser implements IMessageParser
{
    private _timeToNextState: number;
    private _gameResult: Game2GameResult;
    private _teams: Game2TeamScoreData[];
    private _generalStats: Game2SnowWarGameStats;

    public flush(): boolean
    {
        this._timeToNextState = 0;
        this._gameResult = null;
        this._teams = [];
        this._generalStats = null;

        return true;
    }

    public parse(wrapper: IMessageDataWrapper): boolean
    {
        if(!wrapper) return false;

        this._timeToNextState = wrapper.readInt();
        this._gameResult = new Game2GameResult(wrapper);

        let count = wrapper.readInt();

        while(count-- > 0) this._teams.push(new Game2TeamScoreData(wrapper));

        this._generalStats = new Game2SnowWarGameStats(wrapper);

        return true;
    }

    public get timeToNextState(): number
    {
        return this._timeToNextState;
    }

    public get gameResult(): Game2GameResult
    {
        return this._gameResult;
    }

    public get teams(): Game2TeamScoreData[]
    {
        return this._teams;
    }

    public get generalStats(): Game2SnowWarGameStats
    {
        return this._generalStats;
    }
}
