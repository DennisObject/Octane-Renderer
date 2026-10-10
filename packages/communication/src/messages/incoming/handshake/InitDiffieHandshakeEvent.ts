import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { InitDiffieHandshakeParser } from '../../parser';

export class InitDiffieHandshakeEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, InitDiffieHandshakeParser);
    }

    public getParser(): InitDiffieHandshakeParser
    {
        return this.parser as InitDiffieHandshakeParser;
    }
}
