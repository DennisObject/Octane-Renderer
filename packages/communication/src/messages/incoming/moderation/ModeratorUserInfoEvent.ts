import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { ModeratorUserInfoMessageParser } from '../../parser';

export class ModeratorUserInfoEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, ModeratorUserInfoMessageParser);
    }

    public getParser(): ModeratorUserInfoMessageParser
    {
        return this.parser as ModeratorUserInfoMessageParser;
    }
}
