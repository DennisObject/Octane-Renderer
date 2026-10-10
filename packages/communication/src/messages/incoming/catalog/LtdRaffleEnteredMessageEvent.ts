import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { LtdRaffleEnteredMessageParser } from '../../parser';

export class LtdRaffleEnteredMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, LtdRaffleEnteredMessageParser);
    }

    public getParser(): LtdRaffleEnteredMessageParser
    {
        return this.parser as LtdRaffleEnteredMessageParser;
    }
}
