import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { Game2FullGameStatusMessageParser } from '../../../parser';

export class Game2FullGameStatusMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, Game2FullGameStatusMessageParser);
    }

    public getParser(): Game2FullGameStatusMessageParser
    {
        return this.parser as Game2FullGameStatusMessageParser;
    }
}
