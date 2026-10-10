import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { RoomPaintParser } from '../../../parser';

export class RoomPaintEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomPaintParser);
    }

    public getParser(): RoomPaintParser
    {
        return this.parser as RoomPaintParser;
    }
}
