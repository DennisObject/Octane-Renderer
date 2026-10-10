import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { RoomUnitParser } from '../../../parser';

export class RoomUnitEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomUnitParser);
    }

    public getParser(): RoomUnitParser
    {
        return this.parser as RoomUnitParser;
    }
}
