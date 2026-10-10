import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { ChatStyleNotificationMessageParser } from '../../parser';

export class ChatStyleNotificationMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, ChatStyleNotificationMessageParser);
    }

    public getParser(): ChatStyleNotificationMessageParser
    {
        return this.parser as ChatStyleNotificationMessageParser;
    }
}
