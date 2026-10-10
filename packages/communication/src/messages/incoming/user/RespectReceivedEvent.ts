import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { RespectReceivedParser } from '../../parser';

export class RespectReceivedEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RespectReceivedParser);
    }

    public getParser(): RespectReceivedParser
    {
        return this.parser as RespectReceivedParser;
    }
}
