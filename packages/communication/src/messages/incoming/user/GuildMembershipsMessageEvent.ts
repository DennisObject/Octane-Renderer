import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { GuildMembershipsMessageParser } from '../../parser';

export class GuildMembershipsMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, GuildMembershipsMessageParser);
    }

    public getParser(): GuildMembershipsMessageParser
    {
        return this.parser as GuildMembershipsMessageParser;
    }
}
