import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { VoucherRedeemOkMessageParser } from '../../parser';

export class VoucherRedeemOkMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, VoucherRedeemOkMessageParser);
    }

    public getParser(): VoucherRedeemOkMessageParser
    {
        return this.parser as VoucherRedeemOkMessageParser;
    }
}
