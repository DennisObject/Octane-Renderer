import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { NewUserExperienceGiftOfferMessageParser } from '../../parser/nux';

export class NewUserExperienceGiftOfferMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, NewUserExperienceGiftOfferMessageParser);
    }

    public getParser(): NewUserExperienceGiftOfferMessageParser
    {
        return this.parser as NewUserExperienceGiftOfferMessageParser;
    }
}
