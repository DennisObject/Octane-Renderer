import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { RestoreClientMessageParser } from '../../parser';

export class RestoreClientMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RestoreClientMessageParser);
    }

    public getParser(): RestoreClientMessageParser
    {
        return this.parser;
    }
}
