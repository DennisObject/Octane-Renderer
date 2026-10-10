import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { HousekeepingRolesAuditParser } from '../../parser';

export class HousekeepingRolesAuditEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function) { super(callBack, HousekeepingRolesAuditParser); }
    public getParser(): HousekeepingRolesAuditParser { return this.parser as HousekeepingRolesAuditParser; }
}
