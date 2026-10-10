import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { SnowWarGameTokensMessageParser } from '../../parser';

export class SnowWarGameTokensMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, SnowWarGameTokensMessageParser);
    }

    public getParser(): SnowWarGameTokensMessageParser
    {
        return this.parser as SnowWarGameTokensMessageParser;
    }
}
