import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { ClientPingParser } from '../../parser';

export class ClientPingEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, ClientPingParser);
    }

    public getParser(): ClientPingParser
    {
        return this.parser;
    }
}
