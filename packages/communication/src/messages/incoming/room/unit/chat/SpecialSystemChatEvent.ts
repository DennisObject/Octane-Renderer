import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { SpecialSystemChatParser } from '../../../../parser';

export class SpecialSystemChatEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, SpecialSystemChatParser);
    }

    public getParser(): SpecialSystemChatParser
    {
        return this.parser as SpecialSystemChatParser;
    }
}
