import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { PopularRoomTagsResultMessageParser } from '../../parser';

export class PopularRoomTagsResultEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, PopularRoomTagsResultMessageParser);
    }

    public getParser(): PopularRoomTagsResultMessageParser
    {
        return this.parser as PopularRoomTagsResultMessageParser;
    }
}
