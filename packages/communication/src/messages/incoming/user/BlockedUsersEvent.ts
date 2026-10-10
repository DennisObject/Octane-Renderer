import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { BlockedUsersParser } from '../../parser';

export class BlockedUsersEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, BlockedUsersParser);
    }

    public getParser(): BlockedUsersParser
    {
        return this.parser as BlockedUsersParser;
    }
}
