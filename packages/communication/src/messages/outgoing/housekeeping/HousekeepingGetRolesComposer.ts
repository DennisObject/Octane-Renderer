import { IMessageComposer } from '@volt/api';

export class HousekeepingGetRolesComposer implements IMessageComposer<ConstructorParameters<typeof HousekeepingGetRolesComposer>>
{
    private _data: ConstructorParameters<typeof HousekeepingGetRolesComposer>;
    constructor(requestId: number) { this._data = [requestId]; }
    public getMessageArray() { return this._data; }
    public dispose(): void { return; }
}
