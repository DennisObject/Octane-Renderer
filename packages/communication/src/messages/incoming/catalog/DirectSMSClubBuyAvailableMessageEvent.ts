import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { DirectSMSClubBuyAvailableMessageParser } from '../../parser';

export class DirectSMSClubBuyAvailableMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, DirectSMSClubBuyAvailableMessageParser);
    }

    public getParser(): DirectSMSClubBuyAvailableMessageParser
    {
        return this.parser as DirectSMSClubBuyAvailableMessageParser;
    }
}
