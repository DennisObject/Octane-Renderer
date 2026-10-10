import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { ModeratorInitMessageParser } from '../../parser';

export class ModeratorInitMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, ModeratorInitMessageParser);
    }

    public getParser(): ModeratorInitMessageParser
    {
        return this.parser as ModeratorInitMessageParser;
    }
}
