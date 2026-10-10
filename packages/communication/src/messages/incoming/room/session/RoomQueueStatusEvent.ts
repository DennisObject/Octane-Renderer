import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { RoomQueueStatusParser } from '../../../parser';

export class RoomQueueStatusEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomQueueStatusParser);
    }

    public getParser(): RoomQueueStatusParser
    {
        return this.parser as RoomQueueStatusParser;
    }
}
