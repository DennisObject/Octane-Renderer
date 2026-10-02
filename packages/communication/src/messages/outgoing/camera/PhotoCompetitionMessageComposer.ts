import { IMessageComposer } from '@octane/api';

export class PhotoCompetitionMessageComposer implements IMessageComposer<string[]>
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
