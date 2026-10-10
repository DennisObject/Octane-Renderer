import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { CatalogAdminOfferDetailsMessageParser } from '../../parser';

export class CatalogAdminOfferDetailsEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, CatalogAdminOfferDetailsMessageParser);
    }

    public getParser(): CatalogAdminOfferDetailsMessageParser
    {
        return this.parser as CatalogAdminOfferDetailsMessageParser;
    }
}
