import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { TradingOpenFailedParser } from '../../../parser';

export class TradingOpenFailedEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, TradingOpenFailedParser);
    }

    public getParser(): TradingOpenFailedParser
    {
        return this.parser as TradingOpenFailedParser;
    }
}
