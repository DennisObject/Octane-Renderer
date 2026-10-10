import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { SpecialRoomEventParser } from '../../../parser';

export class SpecialRoomEventEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, SpecialRoomEventParser);
    }

    public getParser(): SpecialRoomEventParser
    {
        return this.parser as SpecialRoomEventParser;
    }
}
