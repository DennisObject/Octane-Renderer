import { IMessageEvent } from '@octane/api';
import { MessageEvent } from '@octane/events';
import { HousekeepingRolesParser } from '../../parser';

export class HousekeepingRolesEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function) { super(callBack, HousekeepingRolesParser); }
    public getParser(): HousekeepingRolesParser { return this.parser as HousekeepingRolesParser; }
}
