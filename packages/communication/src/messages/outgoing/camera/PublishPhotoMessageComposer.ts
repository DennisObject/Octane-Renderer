import { IMessageComposer } from '@volt/api';

export class PublishPhotoMessageComposer implements IMessageComposer<string[]>
{
    private _data: string[];

    constructor(checkoutId?: string)
    {
        if(checkoutId === null || checkoutId === '') checkoutId = undefined;

        this._data = [];

        if(checkoutId !== undefined) this._data.push(checkoutId);
    }

    public getMessageArray(): string[]
    {
        return this._data;
    }

    public dispose(): void
    {
        return;
    }
}
