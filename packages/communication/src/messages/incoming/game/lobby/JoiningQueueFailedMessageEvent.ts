import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { JoiningQueueFailedMessageParser } from '../../../parser';

export class JoiningQueueFailedMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, JoiningQueueFailedMessageParser);
    }

    public getParser(): JoiningQueueFailedMessageParser
    {
        return this.parser as JoiningQueueFailedMessageParser;
    }
}
