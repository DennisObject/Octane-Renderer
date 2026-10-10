import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { UserCurrencyParser } from '../../../../parser';

export class UserCurrencyEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, UserCurrencyParser);
    }

    public getParser(): UserCurrencyParser
    {
        return this.parser as UserCurrencyParser;
    }
}
