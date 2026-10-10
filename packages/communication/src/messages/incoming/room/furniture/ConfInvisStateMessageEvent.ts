import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { ConfInvisStateMessageParser } from '../../../parser';

export class ConfInvisStateMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, ConfInvisStateMessageParser);
    }

    public getParser(): ConfInvisStateMessageParser
    {
        return this.parser as ConfInvisStateMessageParser;
    }
}
