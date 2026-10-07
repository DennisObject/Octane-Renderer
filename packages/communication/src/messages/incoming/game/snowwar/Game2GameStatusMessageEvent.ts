import { IMessageEvent } from '@octane/api';
import { MessageEvent } from '@octane/events';
import { Game2GameStatusMessageParser } from '../../../parser';

export class Game2GameStatusMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, Game2GameStatusMessageParser);
    }

    public getParser(): Game2GameStatusMessageParser
    {
        return this.parser as Game2GameStatusMessageParser;
    }
}
