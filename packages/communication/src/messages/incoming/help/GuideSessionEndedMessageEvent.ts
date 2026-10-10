import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { GuideSessionEndedMessageParser } from '../../parser';

export class GuideSessionEndedMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, GuideSessionEndedMessageParser);
    }

    public getParser(): GuideSessionEndedMessageParser
    {
        return this.parser as GuideSessionEndedMessageParser;
    }
}
