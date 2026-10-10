import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { GuideOnDutyStatusMessageParser } from '../../parser';

export class GuideOnDutyStatusMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, GuideOnDutyStatusMessageParser);
    }

    public getParser(): GuideOnDutyStatusMessageParser
    {
        return this.parser as GuideOnDutyStatusMessageParser;
    }
}
