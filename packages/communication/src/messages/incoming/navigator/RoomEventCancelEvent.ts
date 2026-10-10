import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { RoomEventCancelMessageParser } from '../../parser';

export class RoomEventCancelEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomEventCancelMessageParser);
    }

    public getParser(): RoomEventCancelMessageParser
    {
        return this.parser;
    }
}
