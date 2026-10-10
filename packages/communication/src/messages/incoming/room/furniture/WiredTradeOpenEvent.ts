import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { WiredTradeOpenMessageParser } from '../../../parser';

export class WiredTradeOpenEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, WiredTradeOpenMessageParser);
    }

    public getParser(): WiredTradeOpenMessageParser
    {
        return this.parser as WiredTradeOpenMessageParser;
    }
}
