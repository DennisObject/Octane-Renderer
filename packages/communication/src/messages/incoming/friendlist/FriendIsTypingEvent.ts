import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { FriendIsTypingParser } from '../../parser';

export class FriendIsTypingEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, FriendIsTypingParser);
    }

    public getParser(): FriendIsTypingParser
    {
        return this.parser as FriendIsTypingParser;
    }
}
