import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { BonusRareInfoMessageParser } from '../../parser';

export class BonusRareInfoMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, BonusRareInfoMessageParser);
    }

    public getParser(): BonusRareInfoMessageParser
    {
        return this.parser as BonusRareInfoMessageParser;
    }
}
