import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { UserEventCatsMessageParser } from '../../parser';

export class UserEventCatsEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, UserEventCatsMessageParser);
    }

    public getParser(): UserEventCatsMessageParser
    {
        return this.parser as UserEventCatsMessageParser;
    }
}
