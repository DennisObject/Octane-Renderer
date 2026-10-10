import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { MarketplaceItemStatsParser } from '../../parser';

export class MarketplaceItemStatsEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, MarketplaceItemStatsParser);
    }

    public getParser(): MarketplaceItemStatsParser
    {
        return this.parser as MarketplaceItemStatsParser;
    }
}
