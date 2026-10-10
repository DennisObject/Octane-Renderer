import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { NoSuchFlatParser } from '../../parser';

export class NoSuchFlatEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, NoSuchFlatParser);
    }

    public getParser(): NoSuchFlatParser
    {
        return this.parser as NoSuchFlatParser;
    }
}
