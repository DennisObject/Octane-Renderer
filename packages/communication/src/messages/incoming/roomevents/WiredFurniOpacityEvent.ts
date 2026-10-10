import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { WiredFurniOpacityParser } from '../../parser';

export class WiredFurniOpacityEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, WiredFurniOpacityParser);
    }

    public getParser(): WiredFurniOpacityParser
    {
        return this.parser as WiredFurniOpacityParser;
    }
}
