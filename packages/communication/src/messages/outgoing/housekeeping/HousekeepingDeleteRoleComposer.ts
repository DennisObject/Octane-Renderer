import { IMessageComposer } from '@volt/api';

export class HousekeepingDeleteRoleComposer implements IMessageComposer<ConstructorParameters<typeof HousekeepingDeleteRoleComposer>>
{
    private _data: ConstructorParameters<typeof HousekeepingDeleteRoleComposer>;
    constructor(revision: number, roleId: number)
    {
        this._data = [revision, roleId];
    }
    public getMessageArray() { return this._data; }
    public dispose(): void { return; }
}
