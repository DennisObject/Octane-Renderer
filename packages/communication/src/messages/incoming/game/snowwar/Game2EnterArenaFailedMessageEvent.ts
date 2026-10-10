import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { Game2EnterArenaFailedMessageParser } from '../../../parser';

export class Game2EnterArenaFailedMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, Game2EnterArenaFailedMessageParser);
    }

    public getParser(): Game2EnterArenaFailedMessageParser
    {
        return this.parser as Game2EnterArenaFailedMessageParser;
    }
}
