import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { WiredRoomSettingsDataParser } from '../../parser';

export class WiredRoomSettingsDataEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, WiredRoomSettingsDataParser);
    }

    public getParser(): WiredRoomSettingsDataParser
    {
        return this.parser as WiredRoomSettingsDataParser;
    }
}
