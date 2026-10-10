import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { PetInventoryParser } from '../../../parser';

export class PetInventoryEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, PetInventoryParser);
    }

    public getParser(): PetInventoryParser
    {
        return this.parser as PetInventoryParser;
    }
}
