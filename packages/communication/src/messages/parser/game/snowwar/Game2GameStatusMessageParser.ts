import { IMessageDataWrapper, IMessageParser } from '@volt/api';
import { GameStatusData } from './GameStatusData';

/** AIR GameStatus: events for turn + 1 and the checksum of turn. */
export class Game2GameStatusMessageParser implements IMessageParser
{
    private _status: GameStatusData;

    public flush(): boolean
    {
        this._status = null;

        return true;
    }

    public parse(wrapper: IMessageDataWrapper): boolean
    {
        if(!wrapper) return false;

        this._status = new GameStatusData(wrapper);

        return true;
    }

    public get status(): GameStatusData
    {
        return this._status;
    }
}
