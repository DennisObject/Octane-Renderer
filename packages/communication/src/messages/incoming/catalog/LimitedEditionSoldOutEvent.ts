import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { LimitedEditionSoldOutParser } from '../../parser';

export class LimitedEditionSoldOutEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, LimitedEditionSoldOutParser);
    }

    public getParser(): LimitedEditionSoldOutParser
    {
        return this.parser;
    }
}
