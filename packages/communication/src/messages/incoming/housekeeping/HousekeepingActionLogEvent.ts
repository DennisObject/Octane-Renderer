import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { HousekeepingActionLogParser } from '../../parser';

export class HousekeepingActionLogEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, HousekeepingActionLogParser);
    }

    public getParser(): HousekeepingActionLogParser
    {
        return this.parser as HousekeepingActionLogParser;
    }
}
