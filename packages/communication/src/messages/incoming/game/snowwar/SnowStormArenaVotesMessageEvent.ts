import { IMessageEvent } from '@octane/api';
import { MessageEvent } from '@octane/events';
import { SnowStormArenaVotesMessageParser } from '../../../parser';

export class SnowStormArenaVotesMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, SnowStormArenaVotesMessageParser);
    }

    public getParser(): SnowStormArenaVotesMessageParser
    {
        return this.parser as SnowStormArenaVotesMessageParser;
    }
}
