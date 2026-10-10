import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { TreasureHuntFailMessageParser } from '../../parser';

export class TreasureHuntFailMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, TreasureHuntFailMessageParser);
    }

    public getParser(): TreasureHuntFailMessageParser
    {
        return this.parser as TreasureHuntFailMessageParser;
    }
}
