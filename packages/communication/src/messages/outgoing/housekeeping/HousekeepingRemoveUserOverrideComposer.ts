import { IMessageComposer } from '@volt/api';

export class HousekeepingRemoveUserOverrideComposer implements IMessageComposer<ConstructorParameters<typeof HousekeepingRemoveUserOverrideComposer>>
{
    private _data: ConstructorParameters<typeof HousekeepingRemoveUserOverrideComposer>;
    constructor(revision: number, userId: number, key: string)
    {
        this._data = [revision, userId, key];
    }
    public getMessageArray() { return this._data; }
    public dispose(): void { return; }
}
