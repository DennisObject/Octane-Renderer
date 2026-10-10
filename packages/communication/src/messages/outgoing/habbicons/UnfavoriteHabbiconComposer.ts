import { IMessageComposer } from '@volt/api';

export class UnfavoriteHabbiconComposer implements IMessageComposer<[number]>
{
    constructor(private habbiconId: number)
    {}

    public getMessageArray(): [number]
    {
        return [this.habbiconId];
    }

    public dispose(): void
    {
        return;
    }
}
