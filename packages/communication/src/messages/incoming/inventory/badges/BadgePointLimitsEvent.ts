import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { BadgePointLimitsParser } from '../../../parser';

export class BadgePointLimitsEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, BadgePointLimitsParser);
    }

    public getParser(): BadgePointLimitsParser
    {
        return this.parser as BadgePointLimitsParser;
    }
}
