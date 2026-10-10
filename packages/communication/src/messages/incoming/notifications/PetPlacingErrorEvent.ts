import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { PetPlacingErrorEventParser } from '../../parser';

export class PetPlacingErrorEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, PetPlacingErrorEventParser);
    }

    public getParser(): PetPlacingErrorEventParser
    {
        return this.parser as PetPlacingErrorEventParser;
    }
}
