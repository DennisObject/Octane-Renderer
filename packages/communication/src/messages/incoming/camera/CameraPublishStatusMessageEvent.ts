import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { CameraPublishStatusMessageParser } from '../../parser';

export class CameraPublishStatusMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, CameraPublishStatusMessageParser);
    }

    public getParser(): CameraPublishStatusMessageParser
    {
        return this.parser as CameraPublishStatusMessageParser;
    }
}
