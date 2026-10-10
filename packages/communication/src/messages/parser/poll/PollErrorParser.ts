import { IMessageDataWrapper, IMessageParser } from '@volt/api';

export class PollErrorParser implements IMessageParser
{
    flush(): boolean
    {
        throw new Error('PollErrorParser cannot be flushed');
    }

    parse(wrapper: IMessageDataWrapper): boolean
    {
        return true;
    }
}
