import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { CatalogStudioSessionMessageParser } from '../../../parser/catalog/studio/CatalogStudioSessionMessageParser';

export class CatalogStudioSessionEvent extends MessageEvent implements IMessageEvent
{
    constructor(callback: Function)
    {
        super(callback, CatalogStudioSessionMessageParser);
    }
    public getParser(): CatalogStudioSessionMessageParser
    {
        return this.parser as CatalogStudioSessionMessageParser;
    }
}
