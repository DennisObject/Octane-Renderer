import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { WiredWebApiKeyResultParser } from '../../parser';

export class WiredWebApiKeyResultEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, WiredWebApiKeyResultParser);
    }

    public getParser(): WiredWebApiKeyResultParser
    {
        return this.parser as WiredWebApiKeyResultParser;
    }
}
