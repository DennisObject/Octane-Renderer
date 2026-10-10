import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { Game2GameCancelledMessageParser } from '../../../parser';

export class Game2GameCancelledMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, Game2GameCancelledMessageParser);
    }

    public getParser(): Game2GameCancelledMessageParser
    {
        return this.parser;
    }
}
