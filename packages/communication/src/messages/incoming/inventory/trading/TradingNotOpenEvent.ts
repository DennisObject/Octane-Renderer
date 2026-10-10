import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { TradingNotOpenParser } from '../../../parser';

export class TradingNotOpenEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, TradingNotOpenParser);
    }

    public getParser(): TradingNotOpenParser
    {
        return this.parser;
    }
}
