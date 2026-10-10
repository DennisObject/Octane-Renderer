import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
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
