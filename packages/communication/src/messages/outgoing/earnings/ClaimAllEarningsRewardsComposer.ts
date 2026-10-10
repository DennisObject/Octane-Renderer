import { IMessageComposer } from '@volt/api';

export class ClaimAllEarningsRewardsComposer implements IMessageComposer<[]>
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
