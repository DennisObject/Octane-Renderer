import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { RoomDoorbellAcceptedParser } from '../../../../parser';

export class RoomDoorbellAcceptedEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomDoorbellAcceptedParser);
    }

    public getParser(): RoomDoorbellAcceptedParser
    {
        return this.parser as RoomDoorbellAcceptedParser;
    }
}
