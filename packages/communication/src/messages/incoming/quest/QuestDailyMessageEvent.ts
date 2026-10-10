import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { QuestDailyMessageParser } from '../../parser';

export class QuestDailyMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, QuestDailyMessageParser);
    }

    public getParser(): QuestDailyMessageParser
    {
        return this.parser as QuestDailyMessageParser;
    }
}
