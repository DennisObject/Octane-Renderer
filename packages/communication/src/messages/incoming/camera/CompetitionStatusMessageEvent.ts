import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { CompetitionStatusMessageParser } from '../../parser';

export class CompetitionStatusMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, CompetitionStatusMessageParser);
    }

    public getParser(): CompetitionStatusMessageParser
    {
        return this.parser as CompetitionStatusMessageParser;
    }
}
