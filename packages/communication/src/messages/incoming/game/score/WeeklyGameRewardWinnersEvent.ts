import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { WeeklyGameRewardWinnersParser } from '../../../parser';

export class WeeklyGameRewardWinnersEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, WeeklyGameRewardWinnersParser);
    }

    public getParser(): WeeklyGameRewardWinnersParser
    {
        return this.parser as WeeklyGameRewardWinnersParser;
    }
}
