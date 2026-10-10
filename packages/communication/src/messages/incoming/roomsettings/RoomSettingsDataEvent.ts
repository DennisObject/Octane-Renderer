import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { RoomSettingsDataParser } from '../../parser';

export class RoomSettingsDataEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomSettingsDataParser);
    }

    public getParser(): RoomSettingsDataParser
    {
        return this.parser as RoomSettingsDataParser;
    }
}
