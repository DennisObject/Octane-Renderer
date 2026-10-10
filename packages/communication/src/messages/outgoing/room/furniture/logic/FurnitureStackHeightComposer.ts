import { IMessageComposer } from '@volt/api';

export class FurnitureStackHeightComposer implements IMessageComposer<ConstructorParameters<typeof FurnitureStackHeightComposer>>
{
    private _data: ConstructorParameters<typeof FurnitureStackHeightComposer>;

    constructor(itemId: number, height: number = -100, multiWalk?: boolean)
    {
        this._data = [itemId, height];

        if(multiWalk !== undefined) this._data.push(multiWalk);
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
