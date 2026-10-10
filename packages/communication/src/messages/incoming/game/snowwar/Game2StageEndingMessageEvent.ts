import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { Game2StageEndingMessageParser } from '../../../parser';

export class Game2StageEndingMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, Game2StageEndingMessageParser);
    }

    public getParser(): Game2StageEndingMessageParser
    {
        return this.parser as Game2StageEndingMessageParser;
    }
}
