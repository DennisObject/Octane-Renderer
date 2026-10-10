import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { AchievementResolutionsMessageParser } from '../../../parser';

export class AchievementResolutionsMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, AchievementResolutionsMessageParser);
    }

    public getParser(): AchievementResolutionsMessageParser
    {
        return this.parser as AchievementResolutionsMessageParser;
    }
}
