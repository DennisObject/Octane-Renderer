import { IMessageComposer } from '@volt/api';

export class RoomRemoveBackgroundComposer implements IMessageComposer<[]>
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
