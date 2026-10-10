import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { FurnitureDataReloadParser } from '../../parser/furniture/FurnitureDataReloadParser';

export class FurnitureDataReloadEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, FurnitureDataReloadParser);
    }

    public getParser(): FurnitureDataReloadParser
    {
        return this.parser as FurnitureDataReloadParser;
    }
}
