import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { IncomeRewardNotificationParser } from '../../parser';

export class IncomeRewardNotificationEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, IncomeRewardNotificationParser);
    }

    public getParser(): IncomeRewardNotificationParser
    {
        return this.parser as IncomeRewardNotificationParser;
    }
}
