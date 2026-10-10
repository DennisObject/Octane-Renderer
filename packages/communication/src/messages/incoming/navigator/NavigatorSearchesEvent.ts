import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { NavigatorSearchesParser } from '../../parser';

export class NavigatorSearchesEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, NavigatorSearchesParser);
    }

    public getParser(): NavigatorSearchesParser
    {
        return this.parser as NavigatorSearchesParser;
    }
}
