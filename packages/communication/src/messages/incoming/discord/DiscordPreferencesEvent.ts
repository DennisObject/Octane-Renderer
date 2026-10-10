import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { DiscordPreferencesParser } from '../../parser';

export class DiscordPreferencesEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, DiscordPreferencesParser);
    }

    public getParser(): DiscordPreferencesParser
    {
        return this.parser as DiscordPreferencesParser;
    }
}
