import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { OpenPetPackageResultMessageParser } from './../../parser';

export class OpenPetPackageResultMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, OpenPetPackageResultMessageParser);
    }

    public getParser(): OpenPetPackageResultMessageParser
    {
        return this.parser as OpenPetPackageResultMessageParser;
    }
}
