import { IMessageDataWrapper, IMessageParser } from '@volt/api';

/** AIR rejoin: the room the player was in before the game. */
export class Game2RejoinPreviousRoomMessageParser implements IMessageParser
{
    private _roomBeforeGame: number;

    public flush(): boolean
    {
        this._roomBeforeGame = 0;

        return true;
    }

    public parse(wrapper: IMessageDataWrapper): boolean
    {
        if(!wrapper) return false;

        this._roomBeforeGame = wrapper.readInt();

        return true;
    }

    public get roomBeforeGame(): number
    {
        return this._roomBeforeGame;
    }
}
