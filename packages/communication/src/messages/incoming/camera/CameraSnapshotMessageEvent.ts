import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { CameraSnapshotMessageParser } from '../../parser';

export class CameraSnapshotMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, CameraSnapshotMessageParser);
    }

    public getParser(): CameraSnapshotMessageParser
    {
        return this.parser as CameraSnapshotMessageParser;
    }
}
