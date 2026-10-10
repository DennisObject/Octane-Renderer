import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { HabboSearchResultParser } from '../../parser';

export class HabboSearchResultEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, HabboSearchResultParser);
    }

    public getParser(): HabboSearchResultParser
    {
        return this.parser as HabboSearchResultParser;
    }
}
