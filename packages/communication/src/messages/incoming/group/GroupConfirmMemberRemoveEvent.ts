import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { GroupConfirmMemberRemoveParser } from '../../parser';

export class GroupConfirmMemberRemoveEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, GroupConfirmMemberRemoveParser);
    }

    public getParser(): GroupConfirmMemberRemoveParser
    {
        return this.parser as GroupConfirmMemberRemoveParser;
    }
}
