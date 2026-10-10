import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { TraxEditorErrorParser } from '../../parser';

export class TraxEditorErrorEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, TraxEditorErrorParser);
    }

    public getParser(): TraxEditorErrorParser
    {
        return this.parser as TraxEditorErrorParser;
    }
}
