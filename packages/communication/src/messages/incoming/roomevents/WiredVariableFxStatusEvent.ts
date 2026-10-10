import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { WiredVariableFxStatusParser } from '../../parser';

export class WiredVariableFxStatusEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, WiredVariableFxStatusParser);
    }

    public getParser(): WiredVariableFxStatusParser
    {
        return this.parser as WiredVariableFxStatusParser;
    }
}
