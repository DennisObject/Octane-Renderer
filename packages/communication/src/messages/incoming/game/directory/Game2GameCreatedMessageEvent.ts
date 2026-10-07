import { IMessageEvent } from '@octane/api';
import { MessageEvent } from '@octane/events';
import { Game2GameCreatedMessageParser } from '../../../parser';

export class Game2GameCreatedMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, Game2GameCreatedMessageParser);
    }

    public getParser(): Game2GameCreatedMessageParser
    {
        return this.parser as Game2GameCreatedMessageParser;
    }
}
