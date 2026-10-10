import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { CallForHelpPendingCallsDeletedMessageParser } from '../../parser';

export class CallForHelpPendingCallsDeletedMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, CallForHelpPendingCallsDeletedMessageParser);
    }

    public getParser(): CallForHelpPendingCallsDeletedMessageParser
    {
        return this.parser;
    }
}
