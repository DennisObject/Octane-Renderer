import { IMessageDataWrapper, IMessageParser } from '@volt/api';

/** AIR PlayerExitedGameArena. */
export class Game2PlayerExitedGameArenaMessageParser implements IMessageParser
{
    private _userId: number;
    private _playerGameObjectId: number;

    public flush(): boolean
    {
        this._userId = 0;
        this._playerGameObjectId = 0;

        return true;
    }

    public parse(wrapper: IMessageDataWrapper): boolean
    {
        if(!wrapper) return false;

        this._userId = wrapper.readInt();
        this._playerGameObjectId = wrapper.readInt();

        return true;
    }

    public get userId(): number
    {
        return this._userId;
    }

    public get playerGameObjectId(): number
    {
        return this._playerGameObjectId;
    }
}
