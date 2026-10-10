import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { BadgeReceivedParser } from '../../../parser';

export class BadgeReceivedEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, BadgeReceivedParser);
    }

    public getParser(): BadgeReceivedParser
    {
        return this.parser as BadgeReceivedParser;
    }
}
