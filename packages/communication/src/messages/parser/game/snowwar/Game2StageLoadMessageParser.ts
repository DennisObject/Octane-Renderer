import { IMessageDataWrapper, IMessageParser } from '@octane/api';

/** AIR StageLoad. */
export class Game2StageLoadMessageParser implements IMessageParser
{
    private _gameType: number;

    public flush(): boolean
    {
        this._gameType = 0;

        return true;
    }

    public parse(wrapper: IMessageDataWrapper): boolean
    {
        if(!wrapper) return false;

        this._gameType = wrapper.readInt();

        return true;
    }

    public get gameType(): number
    {
        return this._gameType;
    }
}
