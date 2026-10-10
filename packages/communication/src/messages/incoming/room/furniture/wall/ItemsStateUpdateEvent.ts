import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { ItemsStateUpdateParser } from '../../../../parser';

export class ItemsStateUpdateEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, ItemsStateUpdateParser);
    }

    public getParser(): ItemsStateUpdateParser
    {
        return this.parser as ItemsStateUpdateParser;
    }
}
