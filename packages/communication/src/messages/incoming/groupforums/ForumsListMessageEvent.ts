import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { GetForumsListMessageParser } from '../../parser';

export class ForumsListMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, GetForumsListMessageParser);
    }

    public getParser(): GetForumsListMessageParser
    {
        return this.parser as GetForumsListMessageParser;
    }
}
