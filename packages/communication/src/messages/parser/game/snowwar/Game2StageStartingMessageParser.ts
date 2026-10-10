import { IMessageDataWrapper, IMessageParser } from '@volt/api';
import { GameObjectsData } from './GameObjectsData';

/** AIR StageStarting. */
export class Game2StageStartingMessageParser implements IMessageParser
{
    private _gameType: number;
    private _roomType: string;
    private _countDown: number;
    private _gameObjects: GameObjectsData;

    public flush(): boolean
    {
        this._gameType = 0;
        this._roomType = '';
        this._countDown = 0;
        this._gameObjects = null;

        return true;
    }

    public parse(wrapper: IMessageDataWrapper): boolean
    {
        if(!wrapper) return false;

        this._gameType = wrapper.readInt();
        this._roomType = wrapper.readString();
        this._countDown = wrapper.readInt();
        this._gameObjects = new GameObjectsData(wrapper);

        return true;
    }

    public get gameType(): number
    {
        return this._gameType;
    }

    public get roomType(): string
    {
        return this._roomType;
    }

    public get countDown(): number
    {
        return this._countDown;
    }

    public get gameObjects(): GameObjectsData
    {
        return this._gameObjects;
    }
}
