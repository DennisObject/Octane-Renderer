import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { GiftReceiverNotFoundParser } from '../../parser';

export class GiftReceiverNotFoundEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, GiftReceiverNotFoundParser);
    }

    public getParser(): GiftReceiverNotFoundParser
    {
        return this.parser;
    }
}
