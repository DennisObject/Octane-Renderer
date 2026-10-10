import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { PetFigureUpdateParser } from '../../../parser';

export class PetFigureUpdateEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, PetFigureUpdateParser);
    }

    public getParser(): PetFigureUpdateParser
    {
        return this.parser as PetFigureUpdateParser;
    }
}
