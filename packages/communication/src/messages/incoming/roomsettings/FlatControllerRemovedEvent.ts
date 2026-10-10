import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { FlatControllerRemovedParser } from '../../parser';

export class FlatControllerRemovedEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, FlatControllerRemovedParser);
    }

    public getParser(): FlatControllerRemovedParser
    {
        return this.parser as FlatControllerRemovedParser;
    }
}
