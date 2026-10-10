import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { RoomThumbnailUpdateResultMessageParser } from '../../parser';

export class RoomThumbnailUpdateResultEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomThumbnailUpdateResultMessageParser);
    }

    public getParser(): RoomThumbnailUpdateResultMessageParser
    {
        return this.parser as RoomThumbnailUpdateResultMessageParser;
    }
}
