import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { WiredUserVariablesDataParser } from '../../parser';

export class WiredUserVariablesDataEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, WiredUserVariablesDataParser);
    }

    public getParser(): WiredUserVariablesDataParser
    {
        return this.parser as WiredUserVariablesDataParser;
    }
}
