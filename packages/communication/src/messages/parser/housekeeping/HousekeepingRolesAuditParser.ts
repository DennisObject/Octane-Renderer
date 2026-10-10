import { IMessageDataWrapper, IMessageParser } from '@volt/api';
import { HousekeepingAccessAudit } from './HousekeepingAccessData';

export class HousekeepingRolesAuditParser implements IMessageParser
{
    public requestId: number = 0;
    public data: HousekeepingAccessAudit = null;
    public flush(): boolean { this.requestId = 0; this.data = null; return true; }
    public parse(wrapper: IMessageDataWrapper): boolean
    {
        if(!wrapper) return false;
        this.requestId = wrapper.readInt();
        const offset = wrapper.readInt(), total = wrapper.readInt();
        const entries: HousekeepingAccessAudit['entries'] = [];
        let count = wrapper.readInt();
        while(count-- > 0) entries.push({ id: wrapper.readInt(), actorName: wrapper.readString(), action: wrapper.readString(), targetType: wrapper.readString(), targetId: wrapper.readInt(), targetName: wrapper.readString(), payload: wrapper.readString(), createdAt: wrapper.readInt() });
        this.data = { offset, total, entries };
        return true;
    }
}
