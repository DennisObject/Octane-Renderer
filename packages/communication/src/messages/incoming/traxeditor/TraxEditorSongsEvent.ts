import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { TraxEditorSongsParser } from '../../parser';

export class TraxEditorSongsEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, TraxEditorSongsParser);
    }

    public getParser(): TraxEditorSongsParser
    {
        return this.parser as TraxEditorSongsParser;
    }
}
