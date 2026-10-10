import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { ConcurrentUsersGoalProgressMessageParser } from '../../parser';

export class ConcurrentUsersGoalProgressMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, ConcurrentUsersGoalProgressMessageParser);
    }

    public getParser(): ConcurrentUsersGoalProgressMessageParser
    {
        return this.parser as ConcurrentUsersGoalProgressMessageParser;
    }
}
