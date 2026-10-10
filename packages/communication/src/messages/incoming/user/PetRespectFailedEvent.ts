import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { PetRespectFailedParser } from '../../parser';

export class PetRespectFailedEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, PetRespectFailedParser);
    }

    public getParser(): PetRespectFailedParser
    {
        return this.parser as PetRespectFailedParser;
    }
}
