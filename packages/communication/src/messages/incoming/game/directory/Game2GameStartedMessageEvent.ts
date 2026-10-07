import { IMessageEvent } from '@octane/api';
import { MessageEvent } from '@octane/events';
import { Game2GameStartedMessageParser } from '../../../parser';

export class Game2GameStartedMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, Game2GameStartedMessageParser);
    }

    public getParser(): Game2GameStartedMessageParser
    {
        return this.parser as Game2GameStartedMessageParser;
    }
}
