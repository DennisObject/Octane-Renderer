import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { UserProfileParser } from '../../../parser';

export class UserProfileEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, UserProfileParser);
    }

    public getParser(): UserProfileParser
    {
        return this.parser as UserProfileParser;
    }
}
