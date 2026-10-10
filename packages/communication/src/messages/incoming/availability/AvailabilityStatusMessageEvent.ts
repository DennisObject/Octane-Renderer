import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { AvailabilityStatusMessageParser } from '../../parser';

export class AvailabilityStatusMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, AvailabilityStatusMessageParser);
    }

    public getParser(): AvailabilityStatusMessageParser
    {
        return this.parser as AvailabilityStatusMessageParser;
    }
}
