import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { HotelWillCloseInMinutesMessageParser } from '../../parser';

export class HotelWillCloseInMinutesEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, HotelWillCloseInMinutesMessageParser);
    }

    public getParser(): HotelWillCloseInMinutesMessageParser
    {
        return this.parser as HotelWillCloseInMinutesMessageParser;
    }
}
