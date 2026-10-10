import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { WiredSaveSuccessParser } from '../../parser';

export class WiredSaveSuccessEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, WiredSaveSuccessParser);
    }

    public getParser(): WiredSaveSuccessParser
    {
        return this.parser;
    }
}
