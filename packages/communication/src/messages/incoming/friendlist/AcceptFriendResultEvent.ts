import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { AcceptFriendResultParser } from '../../parser';

export class AcceptFriendResultEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, AcceptFriendResultParser);
    }

    public getParser(): AcceptFriendResultParser
    {
        return this.parser as AcceptFriendResultParser;
    }
}
