import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { AvailableCommandsParser } from '../../parser';

export class AvailableCommandsEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, AvailableCommandsParser);
    }

    public getParser(): AvailableCommandsParser
    {
        return this.parser as AvailableCommandsParser;
    }
}