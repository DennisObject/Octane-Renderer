import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { HabboClubExtendOfferMessageParser } from '../../parser';

export class HabboClubExtendOfferMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, HabboClubExtendOfferMessageParser);
    }

    public getParser(): HabboClubExtendOfferMessageParser
    {
        return this.parser as HabboClubExtendOfferMessageParser;
    }
}
