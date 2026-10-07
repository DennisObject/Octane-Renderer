import { IMessageDataWrapper, IMessageParser } from '@octane/api';

export interface SnowStormArenaVote
{
    fieldType: number;
    votes: number;
}

/** Plus arena voting (CONTRACT §8): votes per offered arena in offer order, then the leader (0 while tied). */
export class SnowStormArenaVotesMessageParser implements IMessageParser
{
    private _arenas: SnowStormArenaVote[];
    private _leadingFieldType: number;

    public flush(): boolean
    {
        this._arenas = [];
        this._leadingFieldType = 0;

        return true;
    }

    public parse(wrapper: IMessageDataWrapper): boolean
    {
        if(!wrapper) return false;

        let count = wrapper.readInt();

        while(count > 0)
        {
            this._arenas.push({ fieldType: wrapper.readInt(), votes: wrapper.readInt() });

            count--;
        }

        this._leadingFieldType = wrapper.readInt();

        return true;
    }

    public get arenas(): SnowStormArenaVote[]
    {
        return this._arenas;
    }

    public get leadingFieldType(): number
    {
        return this._leadingFieldType;
    }
}
