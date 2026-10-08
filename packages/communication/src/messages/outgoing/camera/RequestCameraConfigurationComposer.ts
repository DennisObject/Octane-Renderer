import { IMessageComposer } from '@octane/api';

export class RequestCameraConfigurationComposer implements IMessageComposer<ConstructorParameters<typeof RequestCameraConfigurationComposer>>
{
    private _data: ConstructorParameters<typeof RequestCameraConfigurationComposer>;

    constructor(viewport?: string)
    {
        this._data = viewport ? [viewport] : [];
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
