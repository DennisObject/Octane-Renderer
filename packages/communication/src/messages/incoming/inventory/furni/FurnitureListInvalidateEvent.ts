import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { FurnitureListInvalidateParser } from '../../../parser';

export class FurnitureListInvalidateEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, FurnitureListInvalidateParser);
    }

    public getParser(): FurnitureListInvalidateParser
    {
        return this.parser;
    }
}
