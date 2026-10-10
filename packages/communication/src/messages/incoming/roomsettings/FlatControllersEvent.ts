import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { FlatControllersParser } from '../../parser';

export class FlatControllersEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, FlatControllersParser);
    }

    public getParser(): FlatControllersParser
    {
        return this.parser as FlatControllersParser;
    }
}
