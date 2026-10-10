import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { HabboBroadcastMessageParser } from '../../parser';

export class HabboBroadcastMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, HabboBroadcastMessageParser);
    }

    public getParser(): HabboBroadcastMessageParser
    {
        return this.parser as HabboBroadcastMessageParser;
    }
}
