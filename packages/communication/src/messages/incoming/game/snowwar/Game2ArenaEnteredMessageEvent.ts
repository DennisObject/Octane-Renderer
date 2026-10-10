import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { Game2ArenaEnteredMessageParser } from '../../../parser';

export class Game2ArenaEnteredMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, Game2ArenaEnteredMessageParser);
    }

    public getParser(): Game2ArenaEnteredMessageParser
    {
        return this.parser as Game2ArenaEnteredMessageParser;
    }
}
