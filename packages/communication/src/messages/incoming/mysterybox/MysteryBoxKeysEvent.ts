import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { MysteryBoxKeysParser } from '../../parser';

export class MysteryBoxKeysEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, MysteryBoxKeysParser);
    }

    public getParser(): MysteryBoxKeysParser
    {
        return this.parser as MysteryBoxKeysParser;
    }
}
