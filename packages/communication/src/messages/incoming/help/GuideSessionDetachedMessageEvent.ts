import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { GuideSessionDetachedMessageParser } from '../../parser';

export class GuideSessionDetachedMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, GuideSessionDetachedMessageParser);
    }

    public getParser(): GuideSessionDetachedMessageParser
    {
        return this.parser;
    }
}
