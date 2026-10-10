import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { RequestSpamWallPostItMessageParser } from '../../../parser';

export class RequestSpamWallPostItMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RequestSpamWallPostItMessageParser);
    }

    public getParser(): RequestSpamWallPostItMessageParser
    {
        return this.parser as RequestSpamWallPostItMessageParser;
    }
}
