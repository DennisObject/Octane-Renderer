import { IMessageDataWrapper, IMessageParser } from '@octane/api';

/** AIR StageStillLoading. */
export class Game2StageStillLoadingMessageParser implements IMessageParser
{
    private _percentage: number;
    private _finishedPlayers: number[];

    public flush(): boolean
    {
        this._percentage = 0;
        this._finishedPlayers = [];

        return true;
    }

    public parse(wrapper: IMessageDataWrapper): boolean
    {
        if(!wrapper) return false;

        this._percentage = wrapper.readInt();

        let count = wrapper.readInt();

        while(count-- > 0) this._finishedPlayers.push(wrapper.readInt());

        return true;
    }

    public get percentage(): number
    {
        return this._percentage;
    }

    /** User ids of the players that finished loading. */
    public get finishedPlayers(): number[]
    {
        return this._finishedPlayers;
    }
}
