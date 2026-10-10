import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { UserWardrobePageParser } from '../../../parser';

export class UserWardrobePageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, UserWardrobePageParser);
    }

    public getParser(): UserWardrobePageParser
    {
        return this.parser as UserWardrobePageParser;
    }
}
