import { IMessageDataWrapper, IMessageParser } from '@octane/api';

export class WiredEnvironmentParser implements IMessageParser
{
    private _hasClickUserWired: boolean;
    private _roomId = 0;
    private _enabledAchievements: string[];

    public flush(): boolean
    {
        this._roomId = 0;
        this._hasClickUserWired = false;
        this._enabledAchievements = [];

        return true;
    }

    public parse(wrapper: IMessageDataWrapper): boolean
    {
        if(!wrapper) return false;

        this._hasClickUserWired = wrapper.readBoolean();
        this._enabledAchievements = [];

        if(wrapper.bytesAvailable)
        {
            const totalAchievements = wrapper.readInt();
            if(totalAchievements < 0) return false;

            for(let i = 0; i < totalAchievements; i++) this._enabledAchievements.push(wrapper.readString());
        }

        if(wrapper.bytesAvailable)
        {
            if(wrapper.readInt() !== 1) return false;
            this._roomId = wrapper.readInt();
            if(this._roomId <= 0 || wrapper.bytesAvailable) return false;
        }

        return true;
    }

    public get roomId(): number
    {
        return this._roomId;
    }

    public get hasClickUserWired(): boolean
    {
        return this._hasClickUserWired;
    }

    public get enabledAchievements(): string[]
    {
        return this._enabledAchievements;
    }
}
