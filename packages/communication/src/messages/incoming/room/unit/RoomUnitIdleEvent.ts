import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { RoomUnitIdleParser } from '../../../parser';

export class RoomUnitIdleEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomUnitIdleParser);
    }

    public getParser(): RoomUnitIdleParser
    {
        return this.parser as RoomUnitIdleParser;
    }
}
