import { IMessageEvent } from '@octane/api';
import { MessageEvent } from '@octane/events';
import { Game2GameChatMessageParser } from '../../../parser';

export class Game2GameChatMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, Game2GameChatMessageParser);
    }

    public getParser(): Game2GameChatMessageParser
    {
        return this.parser as Game2GameChatMessageParser;
    }
}
