import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { ConfigurationItemStatesParser } from '../../../parser';

export class ConfigurationItemStatesEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, ConfigurationItemStatesParser);
    }

    public getParser(): ConfigurationItemStatesParser
    {
        return this.parser as ConfigurationItemStatesParser;
    }
}
