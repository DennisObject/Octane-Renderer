import { IMessageComposer } from '@volt/api';

/**
 * Official `MakeOfferMessageComposer` (3676): the price a buyer pays, the furni type (1 floor, 2 wall),
 * then the item count and the item ids. One price covers a batch of identical items.
 */
export class MakeOfferMessageComposer implements IMessageComposer<ConstructorParameters<typeof MakeOfferMessageComposer>>
{
    private _data: ConstructorParameters<typeof MakeOfferMessageComposer>;

    constructor(credits: number, furniType: number, ...itemIds: number[])
    {
        this._data = [credits, furniType, itemIds.length, ...itemIds];
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
