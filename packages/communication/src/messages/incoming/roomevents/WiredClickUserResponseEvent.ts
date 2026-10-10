import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { WiredClickUserResponseParser } from '../../parser';

export class WiredClickUserResponseEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, WiredClickUserResponseParser);
    }

    public getParser(): WiredClickUserResponseParser
    {
        return this.parser as WiredClickUserResponseParser;
    }
}
