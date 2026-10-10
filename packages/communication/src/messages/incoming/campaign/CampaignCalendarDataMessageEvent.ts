import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { CampaignCalendarDataMessageParser } from '../../parser';

export class CampaignCalendarDataMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, CampaignCalendarDataMessageParser);
    }

    public getParser(): CampaignCalendarDataMessageParser
    {
        return this.parser as CampaignCalendarDataMessageParser;
    }
}
