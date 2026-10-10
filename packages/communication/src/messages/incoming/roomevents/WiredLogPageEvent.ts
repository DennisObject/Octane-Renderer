import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { WiredLogPageParser } from '../../parser';

export class WiredLogPageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, WiredLogPageParser);
    }

    public getParser(): WiredLogPageParser
    {
        return this.parser as WiredLogPageParser;
    }
}
