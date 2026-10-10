import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { RewardTrackProgressMessageParser } from '../../parser';

export class RewardTrackProgressMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RewardTrackProgressMessageParser);
    }

    public getParser(): RewardTrackProgressMessageParser
    {
        return this.parser as RewardTrackProgressMessageParser;
    }
}
