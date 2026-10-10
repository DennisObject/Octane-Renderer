import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { WiredMovementsParser } from '../../../parser';

export class WiredMovementsEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, WiredMovementsParser);
    }

    public getParser(): WiredMovementsParser
    {
        return this.parser as WiredMovementsParser;
    }
}
