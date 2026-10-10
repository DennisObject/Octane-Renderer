import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { CatalogStudioHistoryMessageParser } from '../../../parser/catalog/studio/CatalogStudioHistoryMessageParser';

export class CatalogStudioHistoryEvent extends MessageEvent implements IMessageEvent
{
    constructor(callback: Function)
    {
        super(callback, CatalogStudioHistoryMessageParser);
    }
    public getParser(): CatalogStudioHistoryMessageParser
    {
        return this.parser as CatalogStudioHistoryMessageParser;
    }
}
