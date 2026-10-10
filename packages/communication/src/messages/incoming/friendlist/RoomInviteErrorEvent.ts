import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { RoomInviteErrorParser } from '../../parser';

export class RoomInviteErrorEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomInviteErrorParser);
    }

    public getParser(): RoomInviteErrorParser
    {
        return this.parser as RoomInviteErrorParser;
    }
}
