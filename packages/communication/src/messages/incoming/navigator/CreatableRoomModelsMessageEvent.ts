import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
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
