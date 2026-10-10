import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { BotCommandConfigurationParser } from '../../../parser';

export class BotCommandConfigurationEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, BotCommandConfigurationParser);
    }

    public getParser(): BotCommandConfigurationParser
    {
        return this.parser as BotCommandConfigurationParser;
    }
}
