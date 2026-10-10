import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { Game2LeaderboardParser } from '../../../parser';

export class Game2TotalLeaderboardEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, Game2LeaderboardParser);
    }

    public getParser(): Game2LeaderboardParser
    {
        return this.parser as Game2LeaderboardParser;
    }
}
