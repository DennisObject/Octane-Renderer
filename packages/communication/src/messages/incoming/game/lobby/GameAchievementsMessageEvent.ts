import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { GameAchievementsMessageParser } from '../../../parser';

export class GameAchievementsMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, GameAchievementsMessageParser);
    }

    public getParser(): GameAchievementsMessageParser
    {
        return this.parser as GameAchievementsMessageParser;
    }
}
