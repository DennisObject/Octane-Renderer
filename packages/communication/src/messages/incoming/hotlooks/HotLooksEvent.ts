import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { HotLooksParser } from '../../parser';

export class HotLooksEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, HotLooksParser);
    }

    public getParser(): HotLooksParser
    {
        return this.parser as HotLooksParser;
    }
}
