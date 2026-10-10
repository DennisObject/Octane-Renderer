import { IMessageEvent } from '@octane/api';
import { MessageEvent } from '@octane/events';
import { WiredVariableHoldersPage64Parser } from '../../parser';

export class WiredVariableHoldersPage64Event extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, WiredVariableHoldersPage64Parser);
    }

    public getParser(): WiredVariableHoldersPage64Parser
    {
        return this.parser as WiredVariableHoldersPage64Parser;
    }
}
