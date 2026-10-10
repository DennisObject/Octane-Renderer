import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { TranslationResultParser } from '../../parser';

export class TranslationResultEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, TranslationResultParser);
    }

    public getParser(): TranslationResultParser
    {
        return this.parser as TranslationResultParser;
    }
}
