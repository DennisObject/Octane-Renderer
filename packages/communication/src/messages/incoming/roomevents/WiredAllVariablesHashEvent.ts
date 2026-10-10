import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { WiredAllVariablesHashParser } from '../../parser';

export class WiredAllVariablesHashEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, WiredAllVariablesHashParser);
    }

    public getParser(): WiredAllVariablesHashParser
    {
        return this.parser as WiredAllVariablesHashParser;
    }
}
