import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { MiniMailNewMessageParser } from '../../parser';

export class MiniMailNewMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, MiniMailNewMessageParser);
    }

    public getParser(): MiniMailNewMessageParser
    {
        return this.parser;
    }
}
