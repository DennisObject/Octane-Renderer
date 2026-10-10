import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { RoomUnitChatParser } from '../../../../parser';

export class RoomUnitChatShoutEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomUnitChatParser);
    }

    public getParser(): RoomUnitChatParser
    {
        return this.parser as RoomUnitChatParser;
    }
}
