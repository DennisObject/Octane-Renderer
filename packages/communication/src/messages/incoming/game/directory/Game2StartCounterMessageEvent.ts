import { IMessageEvent } from '@octane/api';
import { MessageEvent } from '@octane/events';
import { Game2StartCounterMessageParser } from '../../../parser';

export class Game2StartCounterMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, Game2StartCounterMessageParser);
    }

    public getParser(): Game2StartCounterMessageParser
    {
        return this.parser as Game2StartCounterMessageParser;
    }
}
