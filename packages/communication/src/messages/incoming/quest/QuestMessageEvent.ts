import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { QuestMessageParser } from '../../parser';

export class QuestMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, QuestMessageParser);
    }

    public getParser(): QuestMessageParser
    {
        return this.parser as QuestMessageParser;
    }
}
