import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { PetSupplementedNotificationParser } from '../../parser';

export class PetSupplementedNotificationEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, PetSupplementedNotificationParser);
    }

    public getParser(): PetSupplementedNotificationParser
    {
        return this.parser as PetSupplementedNotificationParser;
    }
}
