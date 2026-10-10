import { IMessageComposer } from '@volt/api';

export class VerifyCodeMessageComposer implements IMessageComposer<ConstructorParameters<typeof VerifyCodeMessageComposer>>
{
    private _data: ConstructorParameters<typeof VerifyCodeMessageComposer>;

    constructor(verificationCode: string)
    {
        this._data = [verificationCode];
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
