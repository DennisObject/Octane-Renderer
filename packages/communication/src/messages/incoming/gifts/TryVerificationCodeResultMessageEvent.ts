import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { TryVerificationCodeResultParser } from '../../parser';

export class TryVerificationCodeResultMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, TryVerificationCodeResultParser);
    }

    public getParser(): TryVerificationCodeResultParser
    {
        return this.parser as TryVerificationCodeResultParser;
    }
}
