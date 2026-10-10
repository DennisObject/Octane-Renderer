import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { CraftingRecipeMessageParser } from '../../parser';

export class CraftingRecipeEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, CraftingRecipeMessageParser);
    }

    public getParser(): CraftingRecipeMessageParser
    {
        return this.parser as CraftingRecipeMessageParser;
    }
}
