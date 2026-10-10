import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { EarningsCenterParser } from '../../parser';

export class EarningsCenterEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, EarningsCenterParser);
    }

    public getParser(): EarningsCenterParser
    {
        return this.parser as EarningsCenterParser;
    }
}
