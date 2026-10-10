import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { NoobnessLevelMessageParser } from '../../parser';

export class NoobnessLevelMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, NoobnessLevelMessageParser);
    }

    public getParser(): NoobnessLevelMessageParser
    {
        return this.parser as NoobnessLevelMessageParser;
    }
}
