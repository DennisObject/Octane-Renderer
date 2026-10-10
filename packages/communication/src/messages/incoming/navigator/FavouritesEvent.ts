import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { FavouritesMessageParser } from '../../parser';

export class FavouritesEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, FavouritesMessageParser);
    }

    public getParser(): FavouritesMessageParser
    {
        return this.parser as FavouritesMessageParser;
    }
}
