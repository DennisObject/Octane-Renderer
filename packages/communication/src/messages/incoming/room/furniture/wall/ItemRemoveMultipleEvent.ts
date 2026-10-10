import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { ItemRemoveMultipleParser } from '../../../../parser';

export class ItemRemoveMultipleEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, ItemRemoveMultipleParser);
    }

    public getParser(): ItemRemoveMultipleParser
    {
        return this.parser as ItemRemoveMultipleParser;
    }
}
