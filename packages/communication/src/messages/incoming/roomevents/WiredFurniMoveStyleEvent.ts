import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { WiredFurniMoveStyleParser } from '../../parser';

export class WiredFurniMoveStyleEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, WiredFurniMoveStyleParser);
    }

    public getParser(): WiredFurniMoveStyleParser
    {
        return this.parser as WiredFurniMoveStyleParser;
    }
}
