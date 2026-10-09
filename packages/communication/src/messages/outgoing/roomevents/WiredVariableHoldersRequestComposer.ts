import { IMessageComposer } from '@octane/api';

/**
 * Official AIR 13 `WiredMenuOverviewTab.requestHolders`: every holder of one wired
 * variable, used to highlight them in the room.
 */
export class WiredVariableHoldersRequestComposer implements IMessageComposer<(number | string)[]>
{
    private _data: (number | string)[];

    constructor(variableId: string, exact = false)
    {
        this._data = [ variableId ];
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
