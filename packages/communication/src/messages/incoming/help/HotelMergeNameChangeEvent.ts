import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { HotelMergeNameChangeParser } from '../../parser';

export class HotelMergeNameChangeEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, HotelMergeNameChangeParser);
    }

    public getParser(): HotelMergeNameChangeParser
    {
        return this.parser;
    }
}
