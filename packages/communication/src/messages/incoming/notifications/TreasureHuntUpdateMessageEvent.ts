import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { TreasureHuntUpdateMessageParser } from '../../parser';

export class TreasureHuntUpdateMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, TreasureHuntUpdateMessageParser);
    }

    public getParser(): TreasureHuntUpdateMessageParser
    {
        return this.parser as TreasureHuntUpdateMessageParser;
    }
}
