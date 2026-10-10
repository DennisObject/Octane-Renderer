import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { BanInfoParser } from '../../parser';

export class BanInfoEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, BanInfoParser);
    }

    public getParser(): BanInfoParser
    {
        return this.parser as BanInfoParser;
    }
}
