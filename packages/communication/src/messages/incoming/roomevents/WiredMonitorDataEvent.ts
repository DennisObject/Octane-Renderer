import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { WiredMonitorDataParser } from '../../parser';

export class WiredMonitorDataEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, WiredMonitorDataParser);
    }

    public getParser(): WiredMonitorDataParser
    {
        return this.parser as WiredMonitorDataParser;
    }
}
