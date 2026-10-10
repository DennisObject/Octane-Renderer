import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { ObjectRemoveMultipleParser } from '../../../../parser';

export class ObjectRemoveMultipleEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, ObjectRemoveMultipleParser);
    }

    public getParser(): ObjectRemoveMultipleParser
    {
        return this.parser as ObjectRemoveMultipleParser;
    }
}
