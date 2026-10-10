import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { Game2StageLoadMessageParser } from '../../../parser';

export class Game2StageLoadMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, Game2StageLoadMessageParser);
    }

    public getParser(): Game2StageLoadMessageParser
    {
        return this.parser as Game2StageLoadMessageParser;
    }
}
