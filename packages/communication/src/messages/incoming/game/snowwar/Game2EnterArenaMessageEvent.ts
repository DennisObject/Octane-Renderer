import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
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
