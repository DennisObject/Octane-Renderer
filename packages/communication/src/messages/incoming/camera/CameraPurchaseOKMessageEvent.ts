import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { CameraPurchaseOKMessageParser } from '../../parser';

export class CameraPurchaseOKMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, CameraPurchaseOKMessageParser);
    }

    public getParser(): CameraPurchaseOKMessageParser
    {
        return this.parser;
    }
}
