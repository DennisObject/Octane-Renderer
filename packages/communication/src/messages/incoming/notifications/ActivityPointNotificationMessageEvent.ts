import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { ActivityPointNotificationParser } from '../../parser';

export class ActivityPointNotificationMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, ActivityPointNotificationParser);
    }

    public getParser(): ActivityPointNotificationParser
    {
        return this.parser as ActivityPointNotificationParser;
    }
}
