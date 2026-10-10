import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { RewardTracksMessageParser } from '../../parser';

export class RewardTracksMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RewardTracksMessageParser);
    }

    public getParser(): RewardTracksMessageParser
    {
        return this.parser as RewardTracksMessageParser;
    }
}
