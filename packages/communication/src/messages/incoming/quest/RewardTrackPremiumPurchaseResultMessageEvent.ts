import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { RewardTrackPremiumPurchaseResultMessageParser } from '../../parser';

export class RewardTrackPremiumPurchaseResultMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RewardTrackPremiumPurchaseResultMessageParser);
    }

    public getParser(): RewardTrackPremiumPurchaseResultMessageParser
    {
        return this.parser as RewardTrackPremiumPurchaseResultMessageParser;
    }
}
