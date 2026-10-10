import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { UserSettingsParser } from '../../../parser';

export class UserSettingsEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, UserSettingsParser);
    }

    public getParser(): UserSettingsParser
    {
        return this.parser as UserSettingsParser;
    }
}
