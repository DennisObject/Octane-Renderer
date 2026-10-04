import { IMessageComposer } from '@octane/api';

export class HousekeepingSaveRoleComposer implements IMessageComposer<ConstructorParameters<typeof HousekeepingSaveRoleComposer>>
{
    private _data: ConstructorParameters<typeof HousekeepingSaveRoleComposer>;
    constructor(revision: number, id: number, slug: string, name: string, description: string, weight: number, securityLevel: number, badgeCode: string, isStaff: boolean, isHidden: boolean)
    {
        this._data = [revision, id, slug, name, description, weight, securityLevel, badgeCode, isStaff, isHidden];
    }
    public getMessageArray() { return this._data; }
    public dispose(): void { return; }
}
