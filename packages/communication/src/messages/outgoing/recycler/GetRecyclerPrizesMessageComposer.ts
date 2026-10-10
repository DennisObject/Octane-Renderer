import { IMessageComposer } from '@volt/api';

export class GetRecyclerPrizesMessageComposer implements IMessageComposer<[]>
{
    public dispose(): void
    {}

    public getMessageArray(): []
    {
        return [];
    }
}
