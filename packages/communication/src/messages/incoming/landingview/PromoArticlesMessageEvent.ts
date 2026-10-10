import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { PromoArticlesMessageParser } from '../../parser';

export class PromoArticlesMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, PromoArticlesMessageParser);
    }

    public getParser(): PromoArticlesMessageParser
    {
        return this.parser as PromoArticlesMessageParser;
    }
}
