import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { IsFirstLoginOfDayParser } from '../../parser';

export class IsFirstLoginOfDayEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, IsFirstLoginOfDayParser);
    }

    public getParser(): IsFirstLoginOfDayParser
    {
        return this.parser as IsFirstLoginOfDayParser;
    }
}
