import { IMessageComposer } from '@volt/api';

export class RequestEarningsCenterComposer implements IMessageComposer<[]>
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
