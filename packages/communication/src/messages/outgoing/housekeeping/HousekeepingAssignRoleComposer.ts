import { IMessageComposer } from '@volt/api';

export class HousekeepingAssignRoleComposer implements IMessageComposer<ConstructorParameters<typeof HousekeepingAssignRoleComposer>>
{
    private _data: ConstructorParameters<typeof HousekeepingAssignRoleComposer>;
    constructor(revision: number, username: string, roleId: number, expiresAt: number)
    {
        this._data = [revision, username, roleId, expiresAt];
    }
    public getMessageArray() { return this._data; }
    public dispose(): void { return; }
}
