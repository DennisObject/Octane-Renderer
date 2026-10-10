import { IMessageDataWrapper, IMessageParser } from '@volt/api';
import { HousekeepingAccessOverrides } from './HousekeepingAccessData';

export class HousekeepingUserOverridesParser implements IMessageParser
{
    public requestId: number = 0;
    public data: HousekeepingAccessOverrides = null;
    public flush(): boolean { this.requestId = 0; this.data = null; return true; }
    public parse(wrapper: IMessageDataWrapper): boolean
    {
        if(!wrapper) return false;
        this.requestId = wrapper.readInt();
        const userId = wrapper.readInt(), username = wrapper.readString();
        const overrides: HousekeepingAccessOverrides['overrides'] = [];
        let count = wrapper.readInt();
        while(count-- > 0) overrides.push({ key: wrapper.readString(), effect: wrapper.readString(), reason: wrapper.readString(), expiresAt: wrapper.readInt() });
        this.data = { userId, username, overrides };
        return true;
    }
}
