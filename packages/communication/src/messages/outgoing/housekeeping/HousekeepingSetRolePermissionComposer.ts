import { IMessageComposer } from '@volt/api';

export class HousekeepingSetRolePermissionComposer implements IMessageComposer<ConstructorParameters<typeof HousekeepingSetRolePermissionComposer>>
{
    private _data: ConstructorParameters<typeof HousekeepingSetRolePermissionComposer>;
    constructor(revision: number, roleId: number, key: string, grant: boolean)
    {
        this._data = [revision, roleId, key, grant];
    }
    public getMessageArray() { return this._data; }
    public dispose(): void { return; }
}
