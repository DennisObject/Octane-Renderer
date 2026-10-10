import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { GuideTicketCreationResultMessageParser } from '../../parser';

export class GuideTicketCreationResultMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, GuideTicketCreationResultMessageParser);
    }

    public getParser(): GuideTicketCreationResultMessageParser
    {
        return this.parser as GuideTicketCreationResultMessageParser;
    }
}
