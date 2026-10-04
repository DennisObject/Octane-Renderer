import { IMessageComposer } from '@octane/api';

export class HousekeepingRevokeRoleComposer implements IMessageComposer<ConstructorParameters<typeof HousekeepingRevokeRoleComposer>>
{
    private _data: ConstructorParameters<typeof HousekeepingRevokeRoleComposer>;
    constructor(revision: number, userId: number, roleId: number)
    {
        this._data = [revision, userId, roleId];
    }
    public getMessageArray() { return this._data; }
    public dispose(): void { return; }
}
