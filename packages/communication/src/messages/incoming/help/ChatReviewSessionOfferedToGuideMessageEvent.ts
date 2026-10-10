import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { ChatReviewSessionOfferedToGuideMessageParser } from '../../parser';

export class ChatReviewSessionOfferedToGuideMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, ChatReviewSessionOfferedToGuideMessageParser);
    }

    public getParser(): ChatReviewSessionOfferedToGuideMessageParser
    {
        return this.parser as ChatReviewSessionOfferedToGuideMessageParser;
    }
}
