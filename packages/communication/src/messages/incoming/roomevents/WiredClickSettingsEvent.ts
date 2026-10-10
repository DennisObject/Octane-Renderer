import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { WiredClickSettingsParser } from '../../parser';

export class WiredClickSettingsEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, WiredClickSettingsParser);
    }

    public getParser(): WiredClickSettingsParser
    {
        return this.parser as WiredClickSettingsParser;
    }
}
