import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { PlayListSongAddedMessageParser } from '../../parser';

export class PlayListSongAddedMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, PlayListSongAddedMessageParser);
    }

    public getParser(): PlayListSongAddedMessageParser
    {
        return this.parser as PlayListSongAddedMessageParser;
    }
}
