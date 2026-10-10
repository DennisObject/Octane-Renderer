import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { HousekeepingDashboardParser } from '../../parser';

export class HousekeepingDashboardEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, HousekeepingDashboardParser);
    }

    public getParser(): HousekeepingDashboardParser
    {
        return this.parser as HousekeepingDashboardParser;
    }
}
