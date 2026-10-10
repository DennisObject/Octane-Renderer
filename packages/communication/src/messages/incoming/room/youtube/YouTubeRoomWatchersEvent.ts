import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { YouTubeRoomWatchersParser } from '../../../parser';

export class YouTubeRoomWatchersEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, YouTubeRoomWatchersParser);
    }

    public getParser(): YouTubeRoomWatchersParser
    {
        return this.parser as YouTubeRoomWatchersParser;
    }
}
