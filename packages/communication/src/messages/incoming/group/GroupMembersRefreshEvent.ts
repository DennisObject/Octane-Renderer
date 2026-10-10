import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { GroupMembersRefreshParser } from '../../parser';

export class GroupMembersRefreshEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, GroupMembersRefreshParser);
    }

    public getParser(): GroupMembersRefreshParser
    {
        return this.parser as GroupMembersRefreshParser;
    }
}
