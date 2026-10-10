import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { UserCreditsParser } from '../../../../parser';

export class UserCreditsEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, UserCreditsParser);
    }

    public getParser(): UserCreditsParser
    {
        return this.parser as UserCreditsParser;
    }
}
