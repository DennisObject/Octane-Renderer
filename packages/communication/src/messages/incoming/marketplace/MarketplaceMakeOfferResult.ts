import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { MarketplaceMakeOfferResultParser } from '../../parser';


export class MarketplaceMakeOfferResult extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, MarketplaceMakeOfferResultParser);
    }

    public getParser(): MarketplaceMakeOfferResultParser
    {
        return this.parser as MarketplaceMakeOfferResultParser;
    }
}
