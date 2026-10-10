import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { Game2StageStartingMessageParser } from '../../../parser';

export class Game2StageStartingMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, Game2StageStartingMessageParser);
    }

    public getParser(): Game2StageStartingMessageParser
    {
        return this.parser as Game2StageStartingMessageParser;
    }
}
