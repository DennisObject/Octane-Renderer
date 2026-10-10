import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
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
