import { IMessageDataWrapper, IMessageParser, RoomControllerLevel } from '@octane/api';

export class RoomRightsParser implements IMessageParser
{
    private _roomId: number;
    private _controllerLevel: number;

    public flush(): boolean
    {
        this._roomId = 0;
        this._controllerLevel = RoomControllerLevel.NONE;

        return true;
    }

    public parse(wrapper: IMessageDataWrapper): boolean
    {
        if(!wrapper) return false;

        this._roomId = wrapper.readInt();
        this._controllerLevel = wrapper.readInt();

        return true;
    }

    public get roomId(): number
    {
        return this._roomId;
    }

    public get controllerLevel(): number
    {
        return this._controllerLevel;
    }
}
