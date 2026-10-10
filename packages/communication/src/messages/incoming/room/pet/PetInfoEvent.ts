import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { PetInfoParser } from '../../../parser';

export class PetInfoEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, PetInfoParser);
    }

    public getParser(): PetInfoParser
    {
        return this.parser as PetInfoParser;
    }
}
