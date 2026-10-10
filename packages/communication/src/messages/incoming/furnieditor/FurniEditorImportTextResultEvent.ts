import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { FurniEditorImportTextResultMessageParser } from '../../parser';

export class FurniEditorImportTextResultEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, FurniEditorImportTextResultMessageParser);
    }

    public getParser(): FurniEditorImportTextResultMessageParser
    {
        return this.parser as FurniEditorImportTextResultMessageParser;
    }
}
