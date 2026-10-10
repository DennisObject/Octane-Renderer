import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { Game2UserJoinedGameMessageParser } from '../../../parser';

export class Game2UserJoinedGameMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, Game2UserJoinedGameMessageParser);
    }

    public getParser(): Game2UserJoinedGameMessageParser
    {
        return this.parser as Game2UserJoinedGameMessageParser;
    }
}
