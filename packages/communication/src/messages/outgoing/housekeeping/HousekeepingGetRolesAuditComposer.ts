import { IMessageComposer } from '@volt/api';

export class HousekeepingGetRolesAuditComposer implements IMessageComposer<ConstructorParameters<typeof HousekeepingGetRolesAuditComposer>>
{
    private _data: ConstructorParameters<typeof HousekeepingGetRolesAuditComposer>;
    constructor(requestId: number, offset: number) { this._data = [requestId, offset]; }
    public getMessageArray() { return this._data; }
    public dispose(): void { return; }
}
