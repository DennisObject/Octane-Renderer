import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { FurniEditorDetailResultMessageParser } from '../../parser';

export class FurniEditorDetailResultEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, FurniEditorDetailResultMessageParser);
    }

    public getParser(): FurniEditorDetailResultMessageParser
    {
        return this.parser as FurniEditorDetailResultMessageParser;
    }
}
