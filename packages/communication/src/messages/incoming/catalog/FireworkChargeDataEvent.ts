import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { FireworkChargeDataParser } from '../../parser';

export class FireworkChargeDataEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, FireworkChargeDataParser);
    }

    public getParser(): FireworkChargeDataParser
    {
        return this.parser as FireworkChargeDataParser;
    }
}
