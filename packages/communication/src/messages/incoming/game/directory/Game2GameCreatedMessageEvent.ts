import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
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
