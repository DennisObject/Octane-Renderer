import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { FurnitureListRemoveMultipleParser } from '../../../parser';

export class FurnitureListRemoveMultipleEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, FurnitureListRemoveMultipleParser);
    }

    public getParser(): FurnitureListRemoveMultipleParser
    {
        return this.parser as FurnitureListRemoveMultipleParser;
    }
}
