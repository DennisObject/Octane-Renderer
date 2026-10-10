import { IMessageDataWrapper, IMessageParser } from '@octane/api';
import { FurnitureListItemParser } from './FurnitureListItemParser';

export class FurnitureListAddOrUpdateParser implements IMessageParser
{
    private _items: FurnitureListItemParser[];

    public flush(): boolean
    {
        this._items = [];

        return true;
    }

    public parse(wrapper: IMessageDataWrapper): boolean
    {
        if(!wrapper) return false;

        let totalItems = wrapper.readInt();

        while(totalItems > 0)
        {
            this._items.push(new FurnitureListItemParser(wrapper));

            totalItems--;
        }

        return true;
    }

    public get items(): FurnitureListItemParser[]
    {
        return this._items;
    }
}
