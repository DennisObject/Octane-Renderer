import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { NavigatorMetadataParser } from '../../parser';

export class NavigatorMetadataEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, NavigatorMetadataParser);
    }

    public getParser(): NavigatorMetadataParser
    {
        return this.parser as NavigatorMetadataParser;
    }
}
