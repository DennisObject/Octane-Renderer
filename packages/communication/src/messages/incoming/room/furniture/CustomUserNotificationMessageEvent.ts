import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { CustomUserNotificationMessageParser } from '../../../parser';

export class CustomUserNotificationMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, CustomUserNotificationMessageParser);
    }

    public getParser(): CustomUserNotificationMessageParser
    {
        return this.parser as CustomUserNotificationMessageParser;
    }
}
