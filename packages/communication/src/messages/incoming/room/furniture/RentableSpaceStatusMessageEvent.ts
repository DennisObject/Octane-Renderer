import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { RentableSpaceStatusMessageParser } from '../../../parser';

export class RentableSpaceStatusMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RentableSpaceStatusMessageParser);
    }

    public getParser(): RentableSpaceStatusMessageParser
    {
        return this.parser as RentableSpaceStatusMessageParser;
    }
}
