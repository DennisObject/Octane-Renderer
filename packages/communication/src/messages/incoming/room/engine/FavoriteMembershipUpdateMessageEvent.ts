import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { FavoriteMembershipUpdateMessageParser } from '../../../parser';

export class FavoriteMembershipUpdateMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, FavoriteMembershipUpdateMessageParser);
    }

    public getParser(): FavoriteMembershipUpdateMessageParser
    {
        return this.parser as FavoriteMembershipUpdateMessageParser;
    }
}
