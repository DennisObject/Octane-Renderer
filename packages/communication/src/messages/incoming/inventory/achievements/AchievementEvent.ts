import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { AchievementParser } from '../../../parser';

export class AchievementEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, AchievementParser);
    }

    public getParser(): AchievementParser
    {
        return this.parser as AchievementParser;
    }
}
