import { IMessageEvent } from '@octane/api';
import { MessageEvent } from '@octane/events';
import { AllowedChatStylesMessageParser } from '../../../parser';

export class AllowedChatStylesMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, AllowedChatStylesMessageParser);
    }

    public getParser(): AllowedChatStylesMessageParser
    {
        return this.parser as AllowedChatStylesMessageParser;
    }
}
