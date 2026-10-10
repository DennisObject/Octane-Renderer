import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { LoveLockFurniFriendConfirmedParser } from '../../../parser';

export class LoveLockFurniFriendConfirmedEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, LoveLockFurniFriendConfirmedParser);
    }

    public getParser(): LoveLockFurniFriendConfirmedParser
    {
        return this.parser as LoveLockFurniFriendConfirmedParser;
    }
}
