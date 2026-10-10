import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { IssueDeletedMessageParser } from '../../parser';

export class IssueDeletedMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, IssueDeletedMessageParser);
    }

    public getParser(): IssueDeletedMessageParser
    {
        return this.parser as IssueDeletedMessageParser;
    }
}
