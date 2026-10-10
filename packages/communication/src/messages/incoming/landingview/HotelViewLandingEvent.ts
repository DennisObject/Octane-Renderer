import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { HotelViewLandingParser } from '../../parser';

export class HotelViewLandingEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, HotelViewLandingParser);
    }

    public getParser(): HotelViewLandingParser
    {
        return this.parser as HotelViewLandingParser;
    }
}
