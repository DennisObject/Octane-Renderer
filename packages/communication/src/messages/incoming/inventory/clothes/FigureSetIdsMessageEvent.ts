import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { FigureSetIdsMessageParser } from '../../../parser';

export class FigureSetIdsMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, FigureSetIdsMessageParser);
    }

    public getParser(): FigureSetIdsMessageParser
    {
        return this.parser as FigureSetIdsMessageParser;
    }
}
