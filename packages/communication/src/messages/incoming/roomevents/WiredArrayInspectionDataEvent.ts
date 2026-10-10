import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { WiredArrayInspectionDataParser } from '../../parser';

export class WiredArrayInspectionDataEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, WiredArrayInspectionDataParser);
    }

    public getParser(): WiredArrayInspectionDataParser
    {
        return this.parser as WiredArrayInspectionDataParser;
    }
}
