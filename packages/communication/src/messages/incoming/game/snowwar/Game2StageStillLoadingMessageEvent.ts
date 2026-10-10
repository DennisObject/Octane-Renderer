import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { Game2StageStillLoadingMessageParser } from '../../../parser';

export class Game2StageStillLoadingMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, Game2StageStillLoadingMessageParser);
    }

    public getParser(): Game2StageStillLoadingMessageParser
    {
        return this.parser as Game2StageStillLoadingMessageParser;
    }
}
