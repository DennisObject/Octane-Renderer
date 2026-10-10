import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { RoomPollDataParser } from '../../parser';

export class StartRoomPollEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomPollDataParser);
    }

    public getParser(): RoomPollDataParser
    {
        return this.parser as RoomPollDataParser;
    }
}
