import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { YouTubeRoomBroadcastParser } from '../../../parser';

export class YouTubeRoomBroadcastEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, YouTubeRoomBroadcastParser);
    }

    public getParser(): YouTubeRoomBroadcastParser
    {
        return this.parser as YouTubeRoomBroadcastParser;
    }
}
