import { IMessageEvent } from '@octane/api';
import { MessageEvent } from '@octane/events';
import { Game2GameEndingMessageParser } from '../../../parser';

export class Game2GameEndingMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, Game2GameEndingMessageParser);
    }

    public getParser(): Game2GameEndingMessageParser
    {
        return this.parser as Game2GameEndingMessageParser;
    }
}
