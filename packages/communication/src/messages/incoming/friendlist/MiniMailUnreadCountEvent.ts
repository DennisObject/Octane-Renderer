import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { MiniMailUnreadCountParser } from '../../parser';

export class MiniMailUnreadCountEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, MiniMailUnreadCountParser);
    }

    public getParser(): MiniMailUnreadCountParser
    {
        return this.parser as MiniMailUnreadCountParser;
    }
}
