import { IMessageComposer } from '@octane/api';

export class UserSettingsPrivacyComposer implements IMessageComposer<ConstructorParameters<typeof UserSettingsPrivacyComposer>>
{
    private _data: ConstructorParameters<typeof UserSettingsPrivacyComposer>;

    // profileVisible is the optional fourth flag: whether other users see the full extended
    // profile. A server that reads three flags ignores it.
    constructor(onlineStatusVisible: boolean, friendsCanFollow: boolean, friendRequestsAllowed: boolean, profileVisible: boolean = true)
    {
        this._data = [ onlineStatusVisible, friendsCanFollow, friendRequestsAllowed, profileVisible ];
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
