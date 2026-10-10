import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { SeasonalQuestsParser } from '../../parser';

export class SeasonalQuestsMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, SeasonalQuestsParser);
    }

    public getParser(): SeasonalQuestsParser
    {
        return this.parser as SeasonalQuestsParser;
    }
}
