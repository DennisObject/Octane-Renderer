import { IMessageComposer } from '@volt/api';

export class BuyHabbiconCollectionComposer implements IMessageComposer<[number]>
{
    constructor(private collectionId: number)
    {}

    public getMessageArray(): [number]
    {
        return [this.collectionId];
    }

    public dispose(): void
    {
        return;
    }
}
