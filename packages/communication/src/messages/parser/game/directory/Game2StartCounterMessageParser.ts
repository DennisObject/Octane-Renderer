import { IMessageDataWrapper, IMessageParser } from '@volt/api';

/** AIR Game2StartCounter: lobby / rematch countdown in seconds. */
export class Game2StartCounterMessageParser implements IMessageParser
{
    private _countDownLength: number;

    public flush(): boolean
    {
        this._countDownLength = 0;

        return true;
    }

    public parse(wrapper: IMessageDataWrapper): boolean
    {
        if(!wrapper) return false;

        this._countDownLength = wrapper.readInt();

        return true;
    }

    public get countDownLength(): number
    {
        return this._countDownLength;
    }
}
