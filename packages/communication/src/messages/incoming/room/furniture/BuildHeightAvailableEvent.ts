import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { BuildHeightAvailableParser } from '../../../parser';

export class BuildHeightAvailableEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, BuildHeightAvailableParser);
    }

    public getParser(): BuildHeightAvailableParser
    {
        return this.parser as BuildHeightAvailableParser;
    }
}
