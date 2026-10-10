import { IMessageDataWrapper } from '@volt/api';

export class TalentTrackRewardPerk
{
    private _perkId: string;

    constructor(wrapper: IMessageDataWrapper)
    {
        this._perkId = wrapper.readString();
    }

    public get perkId(): string
    {
        return this._perkId;
    }
}
