import { IMessageComposer } from '@volt/api';

export class HousekeepingGetDashboardComposer implements IMessageComposer<[]>
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
