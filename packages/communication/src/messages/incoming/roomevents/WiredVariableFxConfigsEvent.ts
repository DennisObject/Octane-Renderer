import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { WiredVariableFxConfigsParser } from '../../parser';

export class WiredVariableFxConfigsEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, WiredVariableFxConfigsParser);
    }

    public getParser(): WiredVariableFxConfigsParser
    {
        return this.parser as WiredVariableFxConfigsParser;
    }
}
