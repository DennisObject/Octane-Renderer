import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { ClubGiftNotificationParser } from '../../parser';

export class ClubGiftNotificationEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, ClubGiftNotificationParser);
    }

    public getParser(): ClubGiftNotificationParser
    {
        return this.parser as ClubGiftNotificationParser;
    }
}
