import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { JoinedQueueMessageParser } from '../../../parser';

export class JoinedQueueMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, JoinedQueueMessageParser);
    }

    public getParser(): JoinedQueueMessageParser
    {
        return this.parser as JoinedQueueMessageParser;
    }
}
