import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { CraftingResultMessageParser } from '../../parser';

export class CraftingResultEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, CraftingResultMessageParser);
    }

    public getParser(): CraftingResultMessageParser
    {
        return this.parser as CraftingResultMessageParser;
    }
}
