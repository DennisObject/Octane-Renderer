import { IMessageDataWrapper } from '@volt/api';

/** AIR `Game2PlayerData`. */
export class Game2PlayerData
{
    public readonly referenceId: number;
    public readonly userName: string;
    public readonly figure: string;
    public readonly gender: string;
    public readonly teamId: number;

    constructor(wrapper: IMessageDataWrapper)
    {
        this.referenceId = wrapper.readInt();
        this.userName = wrapper.readString();
        this.figure = wrapper.readString();
        this.gender = wrapper.readString();
        this.teamId = wrapper.readInt();
    }
}
