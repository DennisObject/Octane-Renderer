import { IMessageComposer } from '@volt/api';

export class HousekeepingSetRoleLimitComposer implements IMessageComposer<ConstructorParameters<typeof HousekeepingSetRoleLimitComposer>>
{
    private _data: ConstructorParameters<typeof HousekeepingSetRoleLimitComposer>;
    constructor(revision: number, roleId: number, key: string, value: number, remove: boolean)
    {
        this._data = [revision, roleId, key, value, remove];
    }
    public getMessageArray() { return this._data; }
    public dispose(): void { return; }
}
