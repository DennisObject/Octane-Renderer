import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { UnreadForumsCountMessageParser } from '../../parser';

export class UnreadForumsCountMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, UnreadForumsCountMessageParser);
    }

    public getParser(): UnreadForumsCountMessageParser
    {
        return this.parser as UnreadForumsCountMessageParser;
    }
}
