import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { FurniEditorResultMessageParser } from '../../parser';

export class FurniEditorResultEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, FurniEditorResultMessageParser);
    }

    public getParser(): FurniEditorResultMessageParser
    {
        return this.parser as FurniEditorResultMessageParser;
    }
}
