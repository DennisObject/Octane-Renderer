import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { HotelClosedAndOpensMessageParser } from '../../parser';

export class HotelClosedAndOpensEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, HotelClosedAndOpensMessageParser);
    }

    public getParser(): HotelClosedAndOpensMessageParser
    {
        return this.parser as HotelClosedAndOpensMessageParser;
    }
}
