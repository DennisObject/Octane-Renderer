import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { ObjectRemoveConfirmParser } from '../../../parser';

export class ObjectRemoveConfirmEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, ObjectRemoveConfirmParser);
    }

    public getParser(): ObjectRemoveConfirmParser
    {
        return this.parser as ObjectRemoveConfirmParser;
    }
}
