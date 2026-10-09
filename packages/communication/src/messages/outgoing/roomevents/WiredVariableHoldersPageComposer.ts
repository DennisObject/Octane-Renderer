import { IMessageComposer } from '@octane/api';

/**
 * Official AIR 13 `VariableManagementOverviewView` page request:
 * one page of the holders of a single wired variable, with the user-type and sort filters.
 */
export class WiredVariableHoldersPageComposer implements IMessageComposer<(number | string)[]>
{
    private _data: (number | string)[];

    constructor(variableId: string, page: number, pageSize: number, userTypeFilter: number, sortTypeFilter: number, exact = false)
    {
        this._data = [ variableId, page, pageSize, userTypeFilter, sortTypeFilter ];
        if(exact) this._data.push(1);
    }

    public getMessageArray()
    {
        return this._data;
    }

    public dispose(): void
    {
        return;
    }
}
