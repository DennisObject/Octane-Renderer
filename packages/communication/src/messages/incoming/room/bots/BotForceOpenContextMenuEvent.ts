import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { BotForceOpenContextMenuParser } from '../../../parser';

export class BotForceOpenContextMenuEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, BotForceOpenContextMenuParser);
    }

    public getParser(): BotForceOpenContextMenuParser
    {
        return this.parser as BotForceOpenContextMenuParser;
    }
}
