import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { Game2PlayerExitedGameArenaMessageParser } from '../../../parser';

export class Game2PlayerExitedGameArenaMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, Game2PlayerExitedGameArenaMessageParser);
    }

    public getParser(): Game2PlayerExitedGameArenaMessageParser
    {
        return this.parser as Game2PlayerExitedGameArenaMessageParser;
    }
}
