import { IMessageDataWrapper, IMessageParser } from '@volt/api';

/** AIR StageRunning. */
export class Game2StageRunningMessageParser implements IMessageParser
{
    private _timeToStageEnd: number;

    public flush(): boolean
    {
        this._timeToStageEnd = 0;

        return true;
    }

    public parse(wrapper: IMessageDataWrapper): boolean
    {
        if(!wrapper) return false;

        this._timeToStageEnd = wrapper.readInt();

        return true;
    }

    public get timeToStageEnd(): number
    {
        return this._timeToStageEnd;
    }
}
