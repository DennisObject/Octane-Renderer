import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { MarketplaceBuyOfferResultParser } from '../../parser';


export class MarketplaceBuyOfferResultEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, MarketplaceBuyOfferResultParser);
    }

    public getParser(): MarketplaceBuyOfferResultParser
    {
        return this.parser as MarketplaceBuyOfferResultParser;
    }
}
