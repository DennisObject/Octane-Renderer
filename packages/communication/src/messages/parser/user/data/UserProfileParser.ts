import { IMessageDataWrapper, IMessageParser } from '@octane/api';
import { HabboGroupEntryData } from '../HabboGroupEntryData';

export class UserProfileParser implements IMessageParser
{
    private _id: number;
    private _username: string;
    private _figure: string;
    private _motto: string;
    private _registration: string;
    private _achievementPoints: number;
    private _friendsCount: number;
    private _isMyFriend: boolean;
    private _requestSent: boolean;
    private _onlineStatus: number;
    private _groups: HabboGroupEntryData[];
    private _secondsSinceLastVisit: number;
    private _openProfileWindow: boolean;
    private _nativeProfile: {
        isHidden: boolean;
        level: number;
        starGemCount: number;
        banned: boolean;
        totalBadges: number;
        badgeRank: number;
    } = null;

    public flush(): boolean
    {
        this._id = 0;
        this._username = null;
        this._figure = null;
        this._motto = null;
        this._registration = null;
        this._achievementPoints = 0;
        this._friendsCount = 0;
        this._isMyFriend = false;
        this._requestSent = false;
        this._onlineStatus = 0;
        this._groups = [];
        this._secondsSinceLastVisit = 0;
        this._openProfileWindow = false;
        this._nativeProfile = null;

        return true;
    }

    public parse(wrapper: IMessageDataWrapper): boolean
    {
        if(!wrapper) return false;

        this._nativeProfile = null;

        this._id = wrapper.readInt();
        this._username = wrapper.readString();
        this._figure = wrapper.readString();
        this._motto = wrapper.readString();
        this._registration = wrapper.readString();
        this._achievementPoints = wrapper.readInt();
        this._friendsCount = wrapper.readInt();
        this._isMyFriend = wrapper.readBoolean();
        this._requestSent = wrapper.readBoolean();
        this._onlineStatus = wrapper.readByte();
        if(this._onlineStatus < 0 || this._onlineStatus > 2) return false;
        const groupsCount = wrapper.readInt();

        for(let i = 0; i < groupsCount; i++)
        {
            this._groups.push(new HabboGroupEntryData(wrapper));
        }

        this._secondsSinceLastVisit = wrapper.readInt();
        this._openProfileWindow = wrapper.readBoolean();

        // Legacy packets stop here. v75 D8 reads a 31 + 5 * tupleCount byte tail.
        if(!wrapper.bytesAvailable) return true;
        if(!Number.isInteger(wrapper.remainingBytes) || wrapper.remainingBytes < 31) return false;

        const isHidden = wrapper.readBoolean();
        const level = wrapper.readInt();
        wrapper.readInt(); // D8._rb51c3e4aea75e8: meaning unconfirmed.
        const starGemCount = wrapper.readInt();
        wrapper.readBoolean(); // D8._r20b06e83c96f6d: meaning unconfirmed.
        const banned = wrapper.readBoolean();
        const totalBadges = wrapper.readInt();
        wrapper.readInt(); // D8._rc7f7fd60014cd7: meaning unconfirmed.
        const tupleCount = wrapper.readInt();

        if(tupleCount < 0 || wrapper.remainingBytes !== 4 + (5 * tupleCount)) return false;

        for(let i = 0; i < tupleCount; i++)
        {
            wrapper.readByte();
            wrapper.readInt();
        }

        const badgeRank = wrapper.readInt();
        this._nativeProfile = { isHidden, level, starGemCount, banned, totalBadges, badgeRank };

        return true;
    }

    public get id(): number
    {
        return this._id;
    }

    public get username(): string
    {
        return this._username;
    }

    public get figure(): string
    {
        return this._figure;
    }

    public get motto(): string
    {
        return this._motto;
    }

    public get registration(): string
    {
        return this._registration;
    }

    public get achievementPoints(): number
    {
        return this._achievementPoints;
    }

    public get friendsCount(): number
    {
        return this._friendsCount;
    }

    public get isMyFriend(): boolean
    {
        return this._isMyFriend;
    }

    public get requestSent(): boolean
    {
        return this._requestSent;
    }

    public get isOnline(): boolean
    {
        return this._onlineStatus === 1;
    }

    public get onlineStatus(): number
    {
        return this._onlineStatus;
    }

    public get hasNativeProfileFields(): boolean
    {
        return this._nativeProfile !== null;
    }

    public get isHidden(): boolean | null
    {
        return this._nativeProfile?.isHidden ?? null;
    }

    public get level(): number | null
    {
        return this._nativeProfile?.level ?? null;
    }

    public get starGemCount(): number | null
    {
        return this._nativeProfile?.starGemCount ?? null;
    }

    public get banned(): boolean | null
    {
        return this._nativeProfile?.banned ?? null;
    }

    public get totalBadges(): number | null
    {
        return this._nativeProfile?.totalBadges ?? null;
    }

    public get badgeRank(): number | null
    {
        return this._nativeProfile?.badgeRank ?? null;
    }

    public get groups(): HabboGroupEntryData[]
    {
        return this._groups;
    }

    public get secondsSinceLastVisit(): number
    {
        return this._secondsSinceLastVisit;
    }

    public get openProfileWindow(): boolean
    {
        return this._openProfileWindow;
    }
}
