import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { UserGameAchievementsMessageParser } from '../../../parser';

export class UserGameAchievementsMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: (event: IMessageEvent) => void)
    {
        super(callBack, UserGameAchievementsMessageParser);
    }

    public getParser(): UserGameAchievementsMessageParser
    {
        return this.parser as UserGameAchievementsMessageParser;
    }
}
