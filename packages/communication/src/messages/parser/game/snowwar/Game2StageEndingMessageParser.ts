import { IMessageDataWrapper, IMessageParser } from '@octane/api';

/** AIR StageEnding. */
export class Game2StageEndingMessageParser implements IMessageParser
{
    private _timeToNextState: number;

    public flush(): boolean
    {
        this._timeToNextState = 0;

        return true;
    }

    public parse(wrapper: IMessageDataWrapper): boolean
    {
        if(!wrapper) return false;

        this._timeToNextState = wrapper.readInt();

        return true;
    }

    public get timeToNextState(): number
    {
        return this._timeToNextState;
    }
}
