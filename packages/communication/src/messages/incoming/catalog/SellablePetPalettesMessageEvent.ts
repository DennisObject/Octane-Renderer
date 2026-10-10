import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { SellablePetPalettesParser } from '../../parser';

export class SellablePetPalettesMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, SellablePetPalettesParser);
    }

    public getParser(): SellablePetPalettesParser
    {
        return this.parser as SellablePetPalettesParser;
    }
}
