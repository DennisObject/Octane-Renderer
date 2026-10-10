import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { HousekeepingRoleMembersParser } from '../../parser';

export class HousekeepingRoleMembersEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function) { super(callBack, HousekeepingRoleMembersParser); }
    public getParser(): HousekeepingRoleMembersParser { return this.parser as HousekeepingRoleMembersParser; }
}
