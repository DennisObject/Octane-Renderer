import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { FurnitureFloorAddParser } from '../../../../parser';

export class FurnitureFloorAddEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, FurnitureFloorAddParser);
    }

    public getParser(): FurnitureFloorAddParser
    {
        return this.parser as FurnitureFloorAddParser;
    }
}
