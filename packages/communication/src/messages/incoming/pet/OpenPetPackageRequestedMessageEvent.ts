import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { OpenPetPackageRequestedMessageParser } from './../../parser';

export class OpenPetPackageRequestedMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, OpenPetPackageRequestedMessageParser);
    }

    public getParser(): OpenPetPackageRequestedMessageParser
    {
        return this.parser as OpenPetPackageRequestedMessageParser;
    }
}
