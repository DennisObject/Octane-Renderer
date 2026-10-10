import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { NewUserExperienceNotCompleteParser } from '../../parser/nux';

export class NewUserExperienceNotCompleteEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, NewUserExperienceNotCompleteParser);
    }

    public getParser(): NewUserExperienceNotCompleteParser
    {
        return this.parser;
    }
}
