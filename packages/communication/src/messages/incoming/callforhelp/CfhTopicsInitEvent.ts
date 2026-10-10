import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { CfhTopicsInitMessageParser } from '../../parser';

export class CfhTopicsInitEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, CfhTopicsInitMessageParser);
    }

    public getParser(): CfhTopicsInitMessageParser
    {
        return this.parser as CfhTopicsInitMessageParser;
    }
}
