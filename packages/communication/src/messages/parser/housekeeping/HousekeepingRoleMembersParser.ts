import { IMessageDataWrapper, IMessageParser } from '@volt/api';
import { HousekeepingAccessMembers } from './HousekeepingAccessData';

export class HousekeepingRoleMembersParser implements IMessageParser
{
    public requestId: number = 0;
    public data: HousekeepingAccessMembers = null;
    public flush(): boolean { this.requestId = 0; this.data = null; return true; }
    public parse(wrapper: IMessageDataWrapper): boolean
    {
        if(!wrapper) return false;
        this.requestId = wrapper.readInt();
        const roleId = wrapper.readInt(), offset = wrapper.readInt(), total = wrapper.readInt();
        const members: HousekeepingAccessMembers['members'] = [];
        let count = wrapper.readInt();
        while(count-- > 0) members.push({ id: wrapper.readInt(), username: wrapper.readString(), expiresAt: wrapper.readInt() });
        this.data = { roleId, offset, total, members };
        return true;
    }
}
