import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { WiredChestTransactionDetailsMessageParser } from '../../../parser';

export class WiredChestTransactionDetailsEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, WiredChestTransactionDetailsMessageParser);
    }

    public getParser(): WiredChestTransactionDetailsMessageParser
    {
        return this.parser as WiredChestTransactionDetailsMessageParser;
    }
}
