import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { RoomUnitNumberParser } from '../../../parser';

export class RoomUnitNumberEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomUnitNumberParser);
    }

    public getParser(): RoomUnitNumberParser
    {
        return this.parser as RoomUnitNumberParser;
    }
}
