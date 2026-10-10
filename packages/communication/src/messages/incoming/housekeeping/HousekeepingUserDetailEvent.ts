import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { HousekeepingUserDetailParser } from '../../parser';

export class HousekeepingUserDetailEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, HousekeepingUserDetailParser);
    }

    public getParser(): HousekeepingUserDetailParser
    {
        return this.parser as HousekeepingUserDetailParser;
    }
}
