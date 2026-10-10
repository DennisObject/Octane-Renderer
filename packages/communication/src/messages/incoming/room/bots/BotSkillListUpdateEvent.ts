import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { BotSkillListUpdateParser } from '../../../parser';

export class BotSkillListUpdateEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, BotSkillListUpdateParser);
    }

    public getParser(): BotSkillListUpdateParser
    {
        return this.parser as BotSkillListUpdateParser;
    }
}
