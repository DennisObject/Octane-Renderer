import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { HanditemBlockStateMessageParser } from '../../../parser';

export class HanditemBlockStateMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, HanditemBlockStateMessageParser);
    }

    public getParser(): HanditemBlockStateMessageParser
    {
        return this.parser as HanditemBlockStateMessageParser;
    }
}
