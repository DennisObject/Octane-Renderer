import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { GuildMemberMgmtFailedMessageParser } from '../../parser';

export class GuildMemberMgmtFailedMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, GuildMemberMgmtFailedMessageParser);
    }

    public getParser(): GuildMemberMgmtFailedMessageParser
    {
        return this.parser as GuildMemberMgmtFailedMessageParser;
    }
}
