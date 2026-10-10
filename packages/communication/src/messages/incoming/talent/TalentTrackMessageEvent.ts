import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { TalentTrackParser } from '../../parser';

export class TalentTrackMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, TalentTrackParser);
    }

    public getParser(): TalentTrackParser
    {
        return this.parser as TalentTrackParser;
    }
}
