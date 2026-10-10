import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { ConfirmBreedingResultParser } from '../../../parser';

export class ConfirmBreedingResultEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, ConfirmBreedingResultParser);
    }

    public getParser(): ConfirmBreedingResultParser
    {
        return this.parser as ConfirmBreedingResultParser;
    }
}
