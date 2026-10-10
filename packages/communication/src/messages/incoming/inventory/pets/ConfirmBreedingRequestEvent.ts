import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { ConfirmBreedingRequestParser } from '../../../parser';

export class ConfirmBreedingRequestEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, ConfirmBreedingRequestParser);
    }

    public getParser(): ConfirmBreedingRequestParser
    {
        return this.parser as ConfirmBreedingRequestParser;
    }
}
