import { IMessageEvent } from '@octane/api';
import { MessageEvent } from '@octane/events';
import { WiredVariableInspectionDataParser } from '../../parser';

export class WiredVariableInspectionDataEvent extends MessageEvent implements IMessageEvent
{
    constructor(callback: Function)
    {
        super(callback, WiredVariableInspectionDataParser);
    }

    public getParser(): WiredVariableInspectionDataParser
    {
        return this.parser as WiredVariableInspectionDataParser;
    }
}
