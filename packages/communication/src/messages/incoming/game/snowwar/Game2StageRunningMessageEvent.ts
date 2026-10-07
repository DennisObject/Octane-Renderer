import { IMessageEvent } from '@octane/api';
import { MessageEvent } from '@octane/events';
import { Game2StageRunningMessageParser } from '../../../parser';

export class Game2StageRunningMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, Game2StageRunningMessageParser);
    }

    public getParser(): Game2StageRunningMessageParser
    {
        return this.parser as Game2StageRunningMessageParser;
    }
}
