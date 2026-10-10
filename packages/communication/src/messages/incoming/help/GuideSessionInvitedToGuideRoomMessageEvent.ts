import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { GuideSessionInvitedToGuideRoomMessageParser } from '../../parser';

export class GuideSessionInvitedToGuideRoomMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, GuideSessionInvitedToGuideRoomMessageParser);
    }

    public getParser(): GuideSessionInvitedToGuideRoomMessageParser
    {
        return this.parser as GuideSessionInvitedToGuideRoomMessageParser;
    }
}
