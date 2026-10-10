import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { GameStatusMessageParser } from '../../../parser';

export class GameStatusMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, GameStatusMessageParser);
    }

    public getParser(): GameStatusMessageParser
    {
        return this.parser as GameStatusMessageParser;
    }
}
