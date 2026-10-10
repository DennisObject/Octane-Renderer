import { IMessageComposer } from '@volt/api';

export class HousekeepingGetRoleMembersComposer implements IMessageComposer<ConstructorParameters<typeof HousekeepingGetRoleMembersComposer>>
{
    private _data: ConstructorParameters<typeof HousekeepingGetRoleMembersComposer>;
    constructor(requestId: number, roleId: number, offset: number) { this._data = [requestId, roleId, offset]; }
    public getMessageArray() { return this._data; }
    public dispose(): void { return; }
}
