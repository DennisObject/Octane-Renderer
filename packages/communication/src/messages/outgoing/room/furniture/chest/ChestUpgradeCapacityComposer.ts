import { IMessageComposer } from '@octane/api';

/**
 * Buys extra wired chest capacity. [itemId, quantity]; the server applies the chest kind's capacity step.
 */
export class ChestUpgradeCapacityComposer implements IMessageComposer<ConstructorParameters<typeof ChestUpgradeCapacityComposer>>
{
    private _data: ConstructorParameters<typeof ChestUpgradeCapacityComposer>;

    constructor(itemId: number, quantity: number)
    {
        this._data = [itemId, quantity];
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
