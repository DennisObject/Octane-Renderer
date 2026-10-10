import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { LtdRaffleResultMessageParser } from '../../parser';

export class LtdRaffleResultMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, LtdRaffleResultMessageParser);
    }

    public getParser(): LtdRaffleResultMessageParser
    {
        return this.parser as LtdRaffleResultMessageParser;
    }
}
