import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { HousekeepingUserOverridesParser } from '../../parser';

export class HousekeepingUserOverridesEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function) { super(callBack, HousekeepingUserOverridesParser); }
    public getParser(): HousekeepingUserOverridesParser { return this.parser as HousekeepingUserOverridesParser; }
}
