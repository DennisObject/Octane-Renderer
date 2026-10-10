import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { UnloadGameMessageParser } from '../../../parser';

export class UnloadGameMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, UnloadGameMessageParser);
    }

    public getParser(): UnloadGameMessageParser
    {
        return this.parser as UnloadGameMessageParser;
    }
}
