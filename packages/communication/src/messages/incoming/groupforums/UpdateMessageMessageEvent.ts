import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { UpdateMessageMessageParser } from '../../parser';

export class UpdateMessageMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, UpdateMessageMessageParser);
    }

    public getParser(): UpdateMessageMessageParser
    {
        return this.parser as UpdateMessageMessageParser;
    }
}
