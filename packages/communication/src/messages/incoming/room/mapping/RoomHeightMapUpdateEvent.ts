import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { RoomHeightMapUpdateParser } from '../../../parser';

export class RoomHeightMapUpdateEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomHeightMapUpdateParser);
    }

    public getParser(): RoomHeightMapUpdateParser
    {
        return this.parser as RoomHeightMapUpdateParser;
    }
}
