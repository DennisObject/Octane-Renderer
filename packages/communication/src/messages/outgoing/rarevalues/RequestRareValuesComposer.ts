import { IMessageComposer } from '@volt/api';

export class RequestRareValuesComposer implements IMessageComposer<[]>
{
    public getMessageArray(): []
    {
        return [];
    }
    public dispose(): void
    {
        return;
    }
}
