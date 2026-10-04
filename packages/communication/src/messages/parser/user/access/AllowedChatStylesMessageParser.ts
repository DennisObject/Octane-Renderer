import { IMessageDataWrapper, IMessageParser } from '@octane/api';

export class AllowedChatStylesMessageParser implements IMessageParser
{
    private _chatStyleIds: number[] = [];

    public flush(): boolean
    {
        this._chatStyleIds = [];
        return true;
    }

    public parse(wrapper: IMessageDataWrapper): boolean
    {
        if(!wrapper) return false;
        this._chatStyleIds = [];
        const count = wrapper.readInt();
        for(let i = 0; i < count; i++) this._chatStyleIds.push(wrapper.readInt());
        return true;
    }

    public get chatStyleIds(): number[]
    {
        return this._chatStyleIds;
    }
}
