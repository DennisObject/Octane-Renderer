import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { UserCurrentBadgesParser } from '../../../parser';

export class UserCurrentBadgesEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, UserCurrentBadgesParser);
    }

    public getParser(): UserCurrentBadgesParser
    {
        return this.parser as UserCurrentBadgesParser;
    }
}
