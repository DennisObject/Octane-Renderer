import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { GuestRoomSearchResultMessageParser } from '../../parser';

export class GuestRoomSearchResultEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, GuestRoomSearchResultMessageParser);
    }

    public getParser(): GuestRoomSearchResultMessageParser
    {
        return this.parser as GuestRoomSearchResultMessageParser;
    }
}
