import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { OfferRewardDeliveredMessageParser } from '../../parser';

export class OfferRewardDeliveredMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, OfferRewardDeliveredMessageParser);
    }

    public getParser(): OfferRewardDeliveredMessageParser
    {
        return this.parser as OfferRewardDeliveredMessageParser;
    }
}
