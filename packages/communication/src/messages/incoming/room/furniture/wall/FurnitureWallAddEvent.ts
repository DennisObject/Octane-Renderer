import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { FurnitureWallAddParser } from '../../../../parser';

export class FurnitureWallAddEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, FurnitureWallAddParser);
    }

    public getParser(): FurnitureWallAddParser
    {
        return this.parser as FurnitureWallAddParser;
    }
}
