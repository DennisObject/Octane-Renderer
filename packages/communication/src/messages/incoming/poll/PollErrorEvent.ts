import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { PollErrorParser } from '../../parser';

export class PollErrorEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, PollErrorParser);
    }

    public getParser(): PollErrorParser
    {
        return this.parser;
    }
}
