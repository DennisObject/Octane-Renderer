import { IMessageEvent } from '@octane/api';
import { MessageEvent } from '@octane/events';
import { CreatableRoomModelsMessageParser } from '../../parser';

export class CreatableRoomModelsMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, CreatableRoomModelsMessageParser);
    }

    public getParser(): CreatableRoomModelsMessageParser
    {
        return this.parser as CreatableRoomModelsMessageParser;
    }
}
