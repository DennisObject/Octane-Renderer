import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { ChatReviewSessionDetachedMessageParser } from '../../parser';

export class ChatReviewSessionDetachedMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, ChatReviewSessionDetachedMessageParser);
    }

    public getParser(): ChatReviewSessionDetachedMessageParser
    {
        return this.parser;
    }
}
