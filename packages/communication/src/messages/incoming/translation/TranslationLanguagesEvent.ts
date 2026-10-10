import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { TranslationLanguagesParser } from '../../parser';

export class TranslationLanguagesEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, TranslationLanguagesParser);
    }

    public getParser(): TranslationLanguagesParser
    {
        return this.parser as TranslationLanguagesParser;
    }
}
