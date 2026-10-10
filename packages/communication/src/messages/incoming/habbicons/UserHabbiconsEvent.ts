import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { UserHabbiconsParser } from '../../parser/habbicons';

export class UserHabbiconsEvent extends MessageEvent implements IMessageEvent
{
    constructor(callback: (event: UserHabbiconsEvent) => void)
    {
        super(callback, UserHabbiconsParser);
    }

    public getParser(): UserHabbiconsParser
    {
        return this.parser as UserHabbiconsParser;
    }
}
