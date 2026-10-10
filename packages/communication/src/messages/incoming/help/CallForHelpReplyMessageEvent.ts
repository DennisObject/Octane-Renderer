import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { CallForHelpReplyMessageParser } from '../../parser';

export class CallForHelpReplyMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, CallForHelpReplyMessageParser);
    }

    public getParser(): CallForHelpReplyMessageParser
    {
        return this.parser as CallForHelpReplyMessageParser;
    }
}
