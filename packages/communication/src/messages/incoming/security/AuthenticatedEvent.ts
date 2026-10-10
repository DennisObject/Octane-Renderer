import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { AuthenticatedParser } from '../../parser';

export class AuthenticatedEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, AuthenticatedParser);
    }

    public getParser(): AuthenticatedParser
    {
        return this.parser as AuthenticatedParser;
    }
}
