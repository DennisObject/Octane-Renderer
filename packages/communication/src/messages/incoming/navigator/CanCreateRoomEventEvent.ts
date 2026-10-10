import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { CanCreateRoomEventParser } from '../../parser';

export class CanCreateRoomEventEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, CanCreateRoomEventParser);
    }

    public getParser(): CanCreateRoomEventParser
    {
        return this.parser as CanCreateRoomEventParser;
    }
}
