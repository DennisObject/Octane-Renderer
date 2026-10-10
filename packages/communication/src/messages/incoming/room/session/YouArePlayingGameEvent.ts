import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { YouArePlayingGameParser } from '../../../parser';

export class YouArePlayingGameEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, YouArePlayingGameParser);
    }

    public getParser(): YouArePlayingGameParser
    {
        return this.parser as YouArePlayingGameParser;
    }
}
