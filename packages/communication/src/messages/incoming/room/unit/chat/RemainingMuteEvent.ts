import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { RemainingMuteParser } from '../../../../parser';

export class RemainingMuteEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RemainingMuteParser);
    }

    public getParser(): RemainingMuteParser
    {
        return this.parser as RemainingMuteParser;
    }
}
