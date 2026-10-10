import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { RoomHeightMapParser } from '../../../parser';

export class RoomHeightMapEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomHeightMapParser);
    }

    public getParser(): RoomHeightMapParser
    {
        return this.parser as RoomHeightMapParser;
    }
}
