import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { GroupBuyDataParser } from '../../parser';

export class GroupBuyDataEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, GroupBuyDataParser);
    }

    public getParser(): GroupBuyDataParser
    {
        return this.parser as GroupBuyDataParser;
    }
}
