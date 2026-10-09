import { IMessageDataWrapper, IMessageParser } from '@octane/api';

export class WiredClickUserResponseParser implements IMessageParser
{
    private _index: number;
    private _openMenu: boolean;
    private _roomId: number;
    private _requestId: number;
    private _doNotRotate: boolean;

    public flush(): boolean
    {
        this._index = 0;
        this._openMenu = false;
        this._roomId = 0;
        this._requestId = 0;
        this._doNotRotate = false;

        return true;
    }

    public parse(wrapper: IMessageDataWrapper): boolean
    {
        if(!wrapper) return false;

        this._index = wrapper.readInt();
        this._openMenu = wrapper.readBoolean();

        if(wrapper.bytesAvailable)
        {
            if(wrapper.readInt() !== 1) return false;
            this._roomId = wrapper.readInt();
            this._requestId = wrapper.readInt();
            this._doNotRotate = wrapper.readBoolean();
            if(this._roomId <= 0 || this._requestId <= 0) return false;
        }

        if(wrapper.bytesAvailable) return false;

        return true;
    }

    public get index(): number
    {
        return this._index;
    }

    public get openMenu(): boolean
    {
        return this._openMenu;
    }

    public get roomId(): number { return this._roomId; }
    public get requestId(): number { return this._requestId; }
    public get doNotRotate(): boolean { return this._doNotRotate; }
}
