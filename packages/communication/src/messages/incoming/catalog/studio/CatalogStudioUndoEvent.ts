import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { CatalogStudioOperationMessageParser } from '../../../parser/catalog/studio/CatalogStudioOperationMessageParser';

export class CatalogStudioUndoEvent extends MessageEvent implements IMessageEvent
{
    constructor(callback: Function)
    {
        super(callback, CatalogStudioOperationMessageParser);
    }
    public getParser(): CatalogStudioOperationMessageParser
    {
        return this.parser as CatalogStudioOperationMessageParser;
    }
}
