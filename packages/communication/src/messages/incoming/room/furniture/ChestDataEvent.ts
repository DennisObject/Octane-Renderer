import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { ChestDataMessageParser } from '../../../parser';

export class ChestDataEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, ChestDataMessageParser);
    }

    public getParser(): ChestDataMessageParser
    {
        return this.parser as ChestDataMessageParser;
    }
}
