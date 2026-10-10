import { IMessageDataWrapper, IMessageParser } from '@volt/api';
import { HousekeepingAccessRole, HousekeepingAccessSnapshot } from './HousekeepingAccessData';

export class HousekeepingRolesParser implements IMessageParser
{
    public requestId: number = 0;
    public data: HousekeepingAccessSnapshot = null;
    public flush(): boolean { this.requestId = 0; this.data = null; return true; }
    public parse(wrapper: IMessageDataWrapper): boolean
    {
        if(!wrapper) return false;
        this.requestId = wrapper.readInt();
        const revision = wrapper.readInt();
        const actorWeight = wrapper.readInt();
        const roles: HousekeepingAccessRole[] = [];
        let count = wrapper.readInt();
        while(count-- > 0)
        {
            const role: HousekeepingAccessRole = {
                id: wrapper.readInt(), slug: wrapper.readString(), name: wrapper.readString(), description: wrapper.readString(),
                weight: wrapper.readInt(), securityLevel: wrapper.readInt(), badgeCode: wrapper.readString(),
                isStaff: wrapper.readBoolean(), isHidden: wrapper.readBoolean(), memberCount: wrapper.readInt(), permissions: [], limits: {}
            };
            let permissions = wrapper.readInt();
            while(permissions-- > 0) role.permissions.push(wrapper.readString());
            let limits = wrapper.readInt();
            while(limits-- > 0) { const key = wrapper.readString(); role.limits[key] = wrapper.readInt(); }
            roles.push(role);
        }
        const permissions: HousekeepingAccessSnapshot['permissions'] = [];
        count = wrapper.readInt();
        while(count-- > 0) permissions.push({ key: wrapper.readString(), category: wrapper.readString(), description: wrapper.readString(), isOrphan: wrapper.readBoolean(), canGrant: wrapper.readBoolean() });
        const limits: Record<string, number> = {};
        count = wrapper.readInt();
        while(count-- > 0) { const key = wrapper.readString(); limits[key] = wrapper.readInt(); }
        this.data = { revision, actorWeight, roles, permissions, limits };
        return true;
    }
}
