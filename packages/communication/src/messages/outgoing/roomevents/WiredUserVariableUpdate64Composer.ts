import { IMessageComposer } from '@octane/api';
import { wiredInt64Parts } from '../../parser/roomevents/WiredVariableData';

export class WiredUserVariableUpdate64Composer implements IMessageComposer<(number | string)[]>
{
    private _data: (number | string)[];
    constructor(targetType: number, targetId: number, variableItemId: number, value: bigint | string | number, variableToken?: string)
    {
        this._data = [1, targetType, targetId, variableItemId, ...wiredInt64Parts(value)];
        if(variableToken !== undefined) this._data.push(variableToken);
    }
    public getMessageArray(): (number | string)[] { return this._data; }
    public dispose(): void { }
}
