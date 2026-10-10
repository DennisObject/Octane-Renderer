import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { BlockResultParser } from '../../parser';

export class BlockResultEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, BlockResultParser);
    }

    public getParser(): BlockResultParser
    {
        return this.parser as BlockResultParser;
    }
}
