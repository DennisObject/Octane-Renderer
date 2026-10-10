import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { CatalogProductMetadataMessageParser } from '../../../parser/catalog/metadata';

export class CatalogProductMetadataEvent extends MessageEvent implements IMessageEvent
{
    constructor(callback: Function)
    {
        super(callback, CatalogProductMetadataMessageParser);
    }

    public getParser(): CatalogProductMetadataMessageParser
    {
        return this.parser as CatalogProductMetadataMessageParser;
    }
}
