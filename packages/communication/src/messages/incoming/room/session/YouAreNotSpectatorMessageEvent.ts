import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { YouAreNotSpectatorParser } from '../../../parser';

export class YouAreNotSpectatorMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, YouAreNotSpectatorParser);
    }

    public getParser(): YouAreNotSpectatorParser
    {
        return this.parser as YouAreNotSpectatorParser;
    }
}
