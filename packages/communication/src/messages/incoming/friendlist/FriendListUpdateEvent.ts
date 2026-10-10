import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { FriendListUpdateParser } from '../../parser';

export class FriendListUpdateEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, FriendListUpdateParser);
    }

    public getParser(): FriendListUpdateParser
    {
        return this.parser as FriendListUpdateParser;
    }
}
