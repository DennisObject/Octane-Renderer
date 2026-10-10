import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { ChestFurniChunkMessageParser } from '../../../parser';

export class ChestFurniChunkEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, ChestFurniChunkMessageParser);
    }

    public getParser(): ChestFurniChunkMessageParser
    {
        return this.parser as ChestFurniChunkMessageParser;
    }
}
