import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { NavigatorSearchParser } from '../../parser';

export class NavigatorSearchEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, NavigatorSearchParser);
    }

    public getParser(): NavigatorSearchParser
    {
        return this.parser as NavigatorSearchParser;
    }
}
