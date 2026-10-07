import { IMessageEvent } from '@octane/api';
import { MessageEvent } from '@octane/events';
import { Game2GameLongDataMessageParser } from '../../../parser';

export class Game2GameLongDataMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, Game2GameLongDataMessageParser);
    }

    public getParser(): Game2GameLongDataMessageParser
    {
        return this.parser as Game2GameLongDataMessageParser;
    }
}
