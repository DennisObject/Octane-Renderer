import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { BadgeInfoParser } from '../../../parser';

export class BadgeInfoEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, BadgeInfoParser);
    }

    public getParser(): BadgeInfoParser
    {
        return this.parser as BadgeInfoParser;
    }
}
