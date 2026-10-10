import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { PetStatusUpdateParser } from '../../../parser';

export class PetStatusUpdateEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, PetStatusUpdateParser);
    }

    public getParser(): PetStatusUpdateParser
    {
        return this.parser as PetStatusUpdateParser;
    }
}
