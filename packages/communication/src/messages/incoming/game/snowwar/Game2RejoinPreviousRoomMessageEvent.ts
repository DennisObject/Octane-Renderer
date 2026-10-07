import { IMessageEvent } from '@octane/api';
import { MessageEvent } from '@octane/events';
import { Game2RejoinPreviousRoomMessageParser } from '../../../parser';

export class Game2RejoinPreviousRoomMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, Game2RejoinPreviousRoomMessageParser);
    }

    public getParser(): Game2RejoinPreviousRoomMessageParser
    {
        return this.parser as Game2RejoinPreviousRoomMessageParser;
    }
}
