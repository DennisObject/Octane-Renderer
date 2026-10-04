import { IMessageComposer } from '@octane/api';

export class HousekeepingGetUserOverridesComposer implements IMessageComposer<ConstructorParameters<typeof HousekeepingGetUserOverridesComposer>>
{
    private _data: ConstructorParameters<typeof HousekeepingGetUserOverridesComposer>;
    constructor(requestId: number, username: string) { this._data = [requestId, username]; }
    public getMessageArray() { return this._data; }
    public dispose(): void { return; }
}
