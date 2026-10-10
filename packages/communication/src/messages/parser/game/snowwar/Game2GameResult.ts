import { IMessageDataWrapper } from '@volt/api';

/** AIR `Game2GameResult`; resultType 2 = tie. */
export class Game2GameResult
{
    public static readonly RESULT_TIE = 2;

    public readonly isDeathMatch: boolean;
    public readonly resultType: number;
    public readonly winnerId: number;

    constructor(wrapper: IMessageDataWrapper)
    {
        this.isDeathMatch = wrapper.readBoolean();
        this.resultType = wrapper.readInt();
        this.winnerId = wrapper.readInt();
    }
}
