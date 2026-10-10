import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { WiredTradeItemsMessageParser } from '../../../parser';

export class WiredTradeItemsEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, WiredTradeItemsMessageParser);
    }

    public getParser(): WiredTradeItemsMessageParser
    {
        return this.parser as WiredTradeItemsMessageParser;
    }
}
