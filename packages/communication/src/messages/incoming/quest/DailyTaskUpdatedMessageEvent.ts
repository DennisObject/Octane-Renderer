import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { DailyTaskUpdatedMessageParser } from '../../parser';

export class DailyTaskUpdatedMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, DailyTaskUpdatedMessageParser);
    }

    public getParser(): DailyTaskUpdatedMessageParser
    {
        return this.parser as DailyTaskUpdatedMessageParser;
    }
}
