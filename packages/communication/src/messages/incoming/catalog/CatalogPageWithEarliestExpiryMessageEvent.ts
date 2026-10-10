import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { CatalogPageWithEarliestExpiryMessageParser } from '../../parser';

export class CatalogPageWithEarliestExpiryMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, CatalogPageWithEarliestExpiryMessageParser);
    }

    public getParser(): CatalogPageWithEarliestExpiryMessageParser
    {
        return this.parser as CatalogPageWithEarliestExpiryMessageParser;
    }
}
