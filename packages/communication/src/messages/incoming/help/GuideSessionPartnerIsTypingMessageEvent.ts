import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { GuideSessionPartnerIsTypingMessageParser } from '../../parser';

export class GuideSessionPartnerIsTypingMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, GuideSessionPartnerIsTypingMessageParser);
    }

    public getParser(): GuideSessionPartnerIsTypingMessageParser
    {
        return this.parser as GuideSessionPartnerIsTypingMessageParser;
    }
}
