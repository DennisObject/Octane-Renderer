import { IMessageDataWrapper, IMessageParser } from '@volt/api';

export class YouAreSpectatorMessageParser implements IMessageParser
{
    public flush(): boolean
    {
        return true;
    }

    public parse(wrapper: IMessageDataWrapper): boolean
    {
        return true;
    }
}
