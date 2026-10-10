import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { UserInfoParser } from '../../../parser';

export class UserInfoEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, UserInfoParser);
    }

    public getParser(): UserInfoParser
    {
        return this.parser as UserInfoParser;
    }
}
