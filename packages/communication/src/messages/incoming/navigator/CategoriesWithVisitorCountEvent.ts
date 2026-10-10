import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { CategoriesWithVisitorCountParser } from '../../parser';

export class CategoriesWithVisitorCountEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, CategoriesWithVisitorCountParser);
    }

    public getParser(): CategoriesWithVisitorCountParser
    {
        return this.parser as CategoriesWithVisitorCountParser;
    }
}
