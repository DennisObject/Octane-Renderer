import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { CheckUserNameResultMessageParser } from '../../parser';

export class CheckUserNameResultMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, CheckUserNameResultMessageParser);
    }

    public getParser(): CheckUserNameResultMessageParser
    {
        return this.parser as CheckUserNameResultMessageParser;
    }
}
