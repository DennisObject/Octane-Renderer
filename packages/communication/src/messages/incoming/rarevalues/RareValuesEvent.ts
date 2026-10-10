import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { RareValuesParser } from '../../parser';

export class RareValuesEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RareValuesParser);
    }

    public getParser(): RareValuesParser
    {
        return this.parser as RareValuesParser;
    }
}
