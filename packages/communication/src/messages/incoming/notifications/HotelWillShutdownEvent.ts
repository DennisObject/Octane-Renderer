import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { HotelWillShutdownParser } from '../../parser';

export class HotelWillShutdownEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, HotelWillShutdownParser);
    }

    public getParser(): HotelWillShutdownParser
    {
        return this.parser as HotelWillShutdownParser;
    }
}
