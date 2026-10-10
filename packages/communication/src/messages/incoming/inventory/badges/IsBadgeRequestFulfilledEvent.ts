import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { IsBadgeRequestFulfilledParser } from '../../../parser';

export class IsBadgeRequestFulfilledEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, IsBadgeRequestFulfilledParser);
    }

    public getParser(): IsBadgeRequestFulfilledParser
    {
        return this.parser as IsBadgeRequestFulfilledParser;
    }
}
