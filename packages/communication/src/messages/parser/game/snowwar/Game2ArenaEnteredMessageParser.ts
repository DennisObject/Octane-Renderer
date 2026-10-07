import { IMessageDataWrapper, IMessageParser } from '@octane/api';
import { Game2PlayerData } from './Game2PlayerData';

/** AIR ArenaEntered. */
export class Game2ArenaEnteredMessageParser implements IMessageParser
{
    private _player: Game2PlayerData;

    public flush(): boolean
    {
        this._player = null;

        return true;
    }

    public parse(wrapper: IMessageDataWrapper): boolean
    {
        if(!wrapper) return false;

        this._player = new Game2PlayerData(wrapper);

        return true;
    }

    public get player(): Game2PlayerData
    {
        return this._player;
    }
}
