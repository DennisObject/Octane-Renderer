import { IMessageEvent } from '@octane/api';
import { MessageEvent } from '@octane/events';
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
