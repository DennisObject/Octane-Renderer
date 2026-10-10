import { IMessageDataWrapper, IMessageParser } from '@volt/api';
import { FullGameStatusData } from './FullGameStatusData';

/** AIR FullGameStatus. */
export class Game2FullGameStatusMessageParser implements IMessageParser
{
    private _fullStatus: FullGameStatusData;

    public flush(): boolean
    {
        this._fullStatus = null;

        return true;
    }

    public parse(wrapper: IMessageDataWrapper): boolean
    {
        if(!wrapper) return false;

        this._fullStatus = new FullGameStatusData(wrapper);

        return true;
    }

    public get fullStatus(): FullGameStatusData
    {
        return this._fullStatus;
    }
}
