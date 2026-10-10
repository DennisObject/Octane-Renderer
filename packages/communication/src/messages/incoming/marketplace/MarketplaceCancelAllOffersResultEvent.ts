import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { MarketplaceCancelAllOffersResultParser } from '../../parser';

export class MarketplaceCancelAllOffersResultEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, MarketplaceCancelAllOffersResultParser);
    }

    public getParser(): MarketplaceCancelAllOffersResultParser
    {
        return this.parser as MarketplaceCancelAllOffersResultParser;
    }
}
