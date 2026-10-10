import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { ChestLogMessageParser } from '../../../parser';

export class ChestLogEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, ChestLogMessageParser);
    }

    public getParser(): ChestLogMessageParser
    {
        return this.parser as ChestLogMessageParser;
    }
}
