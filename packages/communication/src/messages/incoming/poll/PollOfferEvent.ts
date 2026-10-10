import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { PollOfferParser } from '../../parser';

export class PollOfferEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, PollOfferParser);
    }

    public getParser(): PollOfferParser
    {
        return this.parser as PollOfferParser;
    }
}
