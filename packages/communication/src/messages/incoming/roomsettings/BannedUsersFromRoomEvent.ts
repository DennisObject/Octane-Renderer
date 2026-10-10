import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { BannedUsersFromRoomParser } from '../../parser';

export class BannedUsersFromRoomEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, BannedUsersFromRoomParser);
    }

    public getParser(): BannedUsersFromRoomParser
    {
        return this.parser as BannedUsersFromRoomParser;
    }
}
