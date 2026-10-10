import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { RoomChatSettingsParser } from '../../../parser';

export class RoomChatSettingsEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomChatSettingsParser);
    }

    public getParser(): RoomChatSettingsParser
    {
        return this.parser as RoomChatSettingsParser;
    }
}
