import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { GroupMembershipRequestedMessageParser } from '../../parser';

export class GroupMembershipRequestedMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, GroupMembershipRequestedMessageParser);
    }

    public getParser(): GroupMembershipRequestedMessageParser
    {
        return this.parser as GroupMembershipRequestedMessageParser;
    }
}
