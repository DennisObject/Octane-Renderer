import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { InitCameraMessageParser } from '../../parser';

export class InitCameraMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, InitCameraMessageParser);
    }

    public getParser(): InitCameraMessageParser
    {
        return this.parser as InitCameraMessageParser;
    }
}
