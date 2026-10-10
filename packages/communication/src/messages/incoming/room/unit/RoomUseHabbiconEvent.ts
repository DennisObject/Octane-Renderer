import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { RoomUseHabbiconParser } from '../../../parser';

export class RoomUseHabbiconEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomUseHabbiconParser);
    }

    public getParser(): RoomUseHabbiconParser
    {
        return this.parser as RoomUseHabbiconParser;
    }
}
