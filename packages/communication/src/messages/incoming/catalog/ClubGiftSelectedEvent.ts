import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { ClubGiftSelectedParser } from '../../parser';

export class ClubGiftSelectedEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, ClubGiftSelectedParser);
    }

    public getParser(): ClubGiftSelectedParser
    {
        return this.parser as ClubGiftSelectedParser;
    }
}
