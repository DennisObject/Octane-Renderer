import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
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
