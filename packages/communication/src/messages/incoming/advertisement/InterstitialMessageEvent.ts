import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { InterstitialMessageParser } from '../../parser';

export class InterstitialMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, InterstitialMessageParser);
    }

    public getParser(): InterstitialMessageParser
    {
        return this.parser as InterstitialMessageParser;
    }
}
