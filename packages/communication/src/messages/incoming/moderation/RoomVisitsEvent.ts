import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { RoomVisitsMessageParser } from '../../parser';

export class RoomVisitsEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomVisitsMessageParser);
    }

    public getParser(): RoomVisitsMessageParser
    {
        return this.parser as RoomVisitsMessageParser;
    }
}
