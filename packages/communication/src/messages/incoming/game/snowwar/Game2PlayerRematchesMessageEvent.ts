import { IMessageEvent } from '@octane/api';
import { MessageEvent } from '@octane/events';
import { Game2PlayerRematchesMessageParser } from '../../../parser';

export class Game2PlayerRematchesMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, Game2PlayerRematchesMessageParser);
    }

    public getParser(): Game2PlayerRematchesMessageParser
    {
        return this.parser as Game2PlayerRematchesMessageParser;
    }
}
