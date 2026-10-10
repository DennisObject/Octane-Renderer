import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
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
