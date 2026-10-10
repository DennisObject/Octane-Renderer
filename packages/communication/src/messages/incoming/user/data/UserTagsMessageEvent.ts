import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { UserTagsParser } from '../../../parser';

export class UserTagsMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, UserTagsParser);
    }

    public getParser(): UserTagsParser
    {
        return this.parser as UserTagsParser;
    }
}
