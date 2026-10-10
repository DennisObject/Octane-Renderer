import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { ActiveDailyTasksMessageParser } from '../../parser';

export class ActiveDailyTasksMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, ActiveDailyTasksMessageParser);
    }

    public getParser(): ActiveDailyTasksMessageParser
    {
        return this.parser as ActiveDailyTasksMessageParser;
    }
}
