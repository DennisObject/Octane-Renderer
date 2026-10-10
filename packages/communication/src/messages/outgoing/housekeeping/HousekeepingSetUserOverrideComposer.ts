import { IMessageComposer } from '@volt/api';

export class HousekeepingSetUserOverrideComposer implements IMessageComposer<ConstructorParameters<typeof HousekeepingSetUserOverrideComposer>>
{
    private _data: ConstructorParameters<typeof HousekeepingSetUserOverrideComposer>;
    constructor(revision: number, username: string, key: string, deny: boolean, reason: string, expiresAt: number)
    {
        this._data = [revision, username, key, deny, reason, expiresAt];
    }
    public getMessageArray() { return this._data; }
    public dispose(): void { return; }
}
