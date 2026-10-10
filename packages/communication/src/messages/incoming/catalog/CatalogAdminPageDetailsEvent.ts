import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { CatalogAdminPageDetailsMessageParser } from '../../parser';

export class CatalogAdminPageDetailsEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, CatalogAdminPageDetailsMessageParser);
    }

    public getParser(): CatalogAdminPageDetailsMessageParser
    {
        return this.parser as CatalogAdminPageDetailsMessageParser;
    }
}
