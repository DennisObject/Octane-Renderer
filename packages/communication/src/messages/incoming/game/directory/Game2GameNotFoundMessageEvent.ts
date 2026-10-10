import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { Game2GameNotFoundMessageParser } from '../../../parser';

export class Game2GameNotFoundMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, Game2GameNotFoundMessageParser);
    }

    public getParser(): Game2GameNotFoundMessageParser
    {
        return this.parser;
    }
}
