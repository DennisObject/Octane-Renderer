import { IMessageComposer } from '@volt/api';

export class WiredRoomSettingsRequestComposer implements IMessageComposer<[]>
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
