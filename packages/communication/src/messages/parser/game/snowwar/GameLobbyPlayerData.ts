import { IMessageDataWrapper } from '@octane/api';

/** AIR `GameLobbyPlayerData`. */
export class GameLobbyPlayerData
{
    public readonly userId: number;
    public readonly name: string;
    public readonly figure: string;
    public readonly gender: string;
    public readonly teamId: number;
    public readonly skillLevel: number;
    public readonly totalScore: number;
    public readonly scoreToNextLevel: number;

    constructor(wrapper: IMessageDataWrapper)
    {
        this.userId = wrapper.readInt();
        this.name = wrapper.readString();
        this.figure = wrapper.readString();
        this.gender = wrapper.readString();
        this.teamId = wrapper.readInt();
        this.skillLevel = wrapper.readInt();
        this.totalScore = wrapper.readInt();
        this.scoreToNextLevel = wrapper.readInt();
    }
}
