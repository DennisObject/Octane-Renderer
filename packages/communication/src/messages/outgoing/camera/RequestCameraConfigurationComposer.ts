import { IMessageComposer } from '@volt/api';

export class RequestCameraConfigurationComposer implements IMessageComposer<ConstructorParameters<typeof RequestCameraConfigurationComposer>>
{
    private _data: ConstructorParameters<typeof RequestCameraConfigurationComposer>;

    constructor(viewport?: string)
    {
        if(viewport === null || viewport === '') viewport = undefined;

        this._data = [];

        if(viewport !== undefined) this._data.push(viewport);
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
