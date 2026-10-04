import { IMessageEvent } from '@octane/api';
import { MessageEvent } from '@octane/events';
import { HousekeepingRoleMembersParser } from '../../parser';

export class HousekeepingRoleMembersEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function) { super(callBack, HousekeepingRoleMembersParser); }
    public getParser(): HousekeepingRoleMembersParser { return this.parser as HousekeepingRoleMembersParser; }
}
