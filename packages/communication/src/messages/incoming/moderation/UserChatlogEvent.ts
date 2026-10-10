import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { UserChatlogMessageParser } from '../../parser';

export class UserChatlogEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, UserChatlogMessageParser);
    }

    public getParser(): UserChatlogMessageParser
    {
        return this.parser as UserChatlogMessageParser;
    }
}
