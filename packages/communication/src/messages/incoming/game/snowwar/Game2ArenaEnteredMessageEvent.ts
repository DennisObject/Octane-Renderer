import { IMessageEvent } from '@octane/api';
import { MessageEvent } from '@octane/events';
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
