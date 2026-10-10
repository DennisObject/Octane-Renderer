import { IMessageEvent } from '@octane/api';
import { MessageEvent } from '@octane/events';
import { WiredVariableHolders64Parser } from '../../parser';

export class WiredVariableHolders64Event extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, WiredVariableHolders64Parser);
    }

    public getParser(): WiredVariableHolders64Parser
    {
        return this.parser as WiredVariableHolders64Parser;
    }
}
