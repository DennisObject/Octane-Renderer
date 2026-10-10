import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { ApproveNameResultParser } from '../../parser';

export class ApproveNameMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, ApproveNameResultParser);
    }

    public getParser(): ApproveNameResultParser
    {
        return this.parser as ApproveNameResultParser;
    }
}
