import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { PostThreadMessageParser } from '../../parser';

export class PostThreadMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, PostThreadMessageParser);
    }

    public getParser(): PostThreadMessageParser
    {
        return this.parser as PostThreadMessageParser;
    }
}
