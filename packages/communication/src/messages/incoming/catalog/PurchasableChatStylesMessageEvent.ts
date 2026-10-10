import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { PurchasableChatStylesMessageParser } from '../../parser';

export class PurchasableChatStylesMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, PurchasableChatStylesMessageParser);
    }

    public getParser(): PurchasableChatStylesMessageParser
    {
        return this.parser as PurchasableChatStylesMessageParser;
    }
}
