import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { WiredEnvironmentParser } from '../../parser';

export class WiredEnvironmentEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, WiredEnvironmentParser);
    }

    public getParser(): WiredEnvironmentParser
    {
        return this.parser as WiredEnvironmentParser;
    }
}
