import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { RoomUnitEffectParser } from '../../../parser';

export class RoomUnitEffectEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomUnitEffectParser);
    }

    public getParser(): RoomUnitEffectParser
    {
        return this.parser as RoomUnitEffectParser;
    }
}
