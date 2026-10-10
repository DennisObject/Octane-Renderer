import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
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
