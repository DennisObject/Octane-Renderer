import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { HousekeepingRoomDetailParser } from '../../parser';

export class HousekeepingRoomDetailEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, HousekeepingRoomDetailParser);
    }

    public getParser(): HousekeepingRoomDetailParser
    {
        return this.parser as HousekeepingRoomDetailParser;
    }
}
