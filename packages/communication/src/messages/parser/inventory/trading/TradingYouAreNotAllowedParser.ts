import { IMessageDataWrapper, IMessageParser } from '@volt/api';

export class TradingYouAreNotAllowedParser implements IMessageParser
{
    public flush(): boolean
    {
        return true;
    }

    public parse(wrapper: IMessageDataWrapper): boolean
    {
        if(!wrapper) return false;

        return true;
    }
}
