import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { ChestFurniDeltaMessageParser } from '../../../parser';

export class ChestFurniDeltaEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, ChestFurniDeltaMessageParser);
    }

    public getParser(): ChestFurniDeltaMessageParser
    {
        return this.parser as ChestFurniDeltaMessageParser;
    }
}
