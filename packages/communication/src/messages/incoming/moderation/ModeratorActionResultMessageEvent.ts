import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { ModeratorActionResultMessageParser } from '../../parser';

export class ModeratorActionResultMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, ModeratorActionResultMessageParser);
    }

    public getParser(): ModeratorActionResultMessageParser
    {
        return this.parser as ModeratorActionResultMessageParser;
    }
}
