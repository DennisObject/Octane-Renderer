import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { IsOfferGiftableMessageParser } from '../../parser';

export class IsOfferGiftableMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, IsOfferGiftableMessageParser);
    }

    public getParser(): IsOfferGiftableMessageParser
    {
        return this.parser as IsOfferGiftableMessageParser;
    }
}
