import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { NestBreedingSuccessParser } from '../../../parser';

export class NestBreedingSuccessEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, NestBreedingSuccessParser);
    }

    public getParser(): NestBreedingSuccessParser
    {
        return this.parser as NestBreedingSuccessParser;
    }
}
