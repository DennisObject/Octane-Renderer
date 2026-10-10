import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { OfficialRoomsParser } from '../../parser';

export class OfficialRoomsEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, OfficialRoomsParser);
    }

    public getParser(): OfficialRoomsParser
    {
        return this.parser as OfficialRoomsParser;
    }
}
