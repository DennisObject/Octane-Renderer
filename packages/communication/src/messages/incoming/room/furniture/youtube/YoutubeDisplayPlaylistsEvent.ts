import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { YoutubeDisplayPlaylistsMessageParser } from '../../../../parser';

export class YoutubeDisplayPlaylistsEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, YoutubeDisplayPlaylistsMessageParser);
    }

    public getParser(): YoutubeDisplayPlaylistsMessageParser
    {
        return this.parser as YoutubeDisplayPlaylistsMessageParser;
    }
}
