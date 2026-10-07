import { IMessageEvent } from '@octane/api';
import { MessageEvent } from '@octane/events';
import { Game2EnterArenaMessageParser } from '../../../parser';

export class Game2EnterArenaMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, Game2EnterArenaMessageParser);
    }

    public getParser(): Game2EnterArenaMessageParser
    {
        return this.parser as Game2EnterArenaMessageParser;
    }
}
