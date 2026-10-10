import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { WiredAllVariablesDiffParser } from '../../parser';

export class WiredAllVariablesDiffEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, WiredAllVariablesDiffParser);
    }

    public getParser(): WiredAllVariablesDiffParser
    {
        return this.parser as WiredAllVariablesDiffParser;
    }
}
