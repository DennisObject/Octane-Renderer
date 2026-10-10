import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { RoomPollResultParser } from '../../parser';

export class RoomPollResultEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomPollResultParser);
    }

    public getParser(): RoomPollResultParser
    {
        return this.parser as RoomPollResultParser;
    }
}
