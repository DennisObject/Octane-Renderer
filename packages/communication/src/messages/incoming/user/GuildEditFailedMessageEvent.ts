import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { GuildEditFailedMessageParser } from '../../parser';

export class GuildEditFailedMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, GuildEditFailedMessageParser);
    }

    public getParser(): GuildEditFailedMessageParser
    {
        return this.parser as GuildEditFailedMessageParser;
    }
}
