import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { PresentOpenedMessageParser } from '../../../../parser';

export class PresentOpenedMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, PresentOpenedMessageParser);
    }

    public getParser(): PresentOpenedMessageParser
    {
        return this.parser as PresentOpenedMessageParser;
    }
}
