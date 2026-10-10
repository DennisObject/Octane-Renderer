import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { FriendNotificationParser } from '../../parser';

export class FriendNotificationEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, FriendNotificationParser);
    }

    public getParser(): FriendNotificationParser
    {
        return this.parser as FriendNotificationParser;
    }
}
