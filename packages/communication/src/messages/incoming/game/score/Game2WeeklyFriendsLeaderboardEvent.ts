import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { Game2WeeklyLeaderboardParser } from '../../../parser';

export class Game2WeeklyFriendsLeaderboardEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, Game2WeeklyLeaderboardParser);
    }

    public getParser(): Game2WeeklyLeaderboardParser
    {
        return this.parser as Game2WeeklyLeaderboardParser;
    }
}
