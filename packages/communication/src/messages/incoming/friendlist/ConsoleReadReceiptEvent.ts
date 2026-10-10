import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { ConsoleReadReceiptParser } from '../../parser';

export class ConsoleReadReceiptEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, ConsoleReadReceiptParser);
    }

    public getParser(): ConsoleReadReceiptParser
    {
        return this.parser as ConsoleReadReceiptParser;
    }
}
