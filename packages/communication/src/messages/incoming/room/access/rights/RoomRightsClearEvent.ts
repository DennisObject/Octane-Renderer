import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { RoomRightsClearParser } from '../../../../parser';

export class RoomRightsClearEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomRightsClearParser);
    }

    public getParser(): RoomRightsClearParser
    {
        return this.parser as RoomRightsClearParser;
    }
}
