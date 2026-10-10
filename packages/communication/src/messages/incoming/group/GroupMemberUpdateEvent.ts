import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { GroupMemberUpdateParser } from '../../parser';

export class GroupMemberUpdateEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, GroupMemberUpdateParser);
    }

    public getParser(): GroupMemberUpdateParser
    {
        return this.parser as GroupMemberUpdateParser;
    }
}
