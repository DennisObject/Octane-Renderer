import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { HabboGroupJoinFailedMessageParser } from '../../parser';

export class HabboGroupJoinFailedMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, HabboGroupJoinFailedMessageParser);
    }

    public getParser(): HabboGroupJoinFailedMessageParser
    {
        return this.parser as HabboGroupJoinFailedMessageParser;
    }
}
