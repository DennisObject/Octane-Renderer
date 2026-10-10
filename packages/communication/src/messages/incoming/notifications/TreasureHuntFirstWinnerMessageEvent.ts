import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { TreasureHuntFirstWinnerMessageParser } from '../../parser';

export class TreasureHuntFirstWinnerMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, TreasureHuntFirstWinnerMessageParser);
    }

    public getParser(): TreasureHuntFirstWinnerMessageParser
    {
        return this.parser as TreasureHuntFirstWinnerMessageParser;
    }
}
