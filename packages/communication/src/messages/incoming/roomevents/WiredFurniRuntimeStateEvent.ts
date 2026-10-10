import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { WiredFurniRuntimeStateParser } from '../../parser';

export class WiredFurniRuntimeStateEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, WiredFurniRuntimeStateParser);
    }

    public getParser(): WiredFurniRuntimeStateParser
    {
        return this.parser as WiredFurniRuntimeStateParser;
    }
}
