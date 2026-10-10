import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { FriendListFragmentParser } from '../../parser';

export class FriendListFragmentEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, FriendListFragmentParser);
    }

    public getParser(): FriendListFragmentParser
    {
        return this.parser as FriendListFragmentParser;
    }
}
