import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { RoomChatlogMessageParser } from '../../parser';

export class RoomChatlogEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomChatlogMessageParser);
    }

    public getParser(): RoomChatlogMessageParser
    {
        return this.parser as RoomChatlogMessageParser;
    }
}
