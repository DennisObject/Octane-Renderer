import { ICreatableRoomModel, IMessageDataWrapper, IMessageParser } from '@volt/api';

export class CreatableRoomModelsMessageParser implements IMessageParser
{
    private _models: ICreatableRoomModel[] = [];

    public flush(): boolean
    {
        this._models = [];
        return true;
    }

    public parse(wrapper: IMessageDataWrapper): boolean
    {
        if(!wrapper) return false;
        this._models = [];
        const count = wrapper.readInt();
        for(let i = 0; i < count; i++)
        {
            this._models.push({
                name: wrapper.readString(),
                tileSize: wrapper.readInt(),
                width: wrapper.readInt(),
                height: wrapper.readInt(),
                clubLevel: wrapper.readInt()
            });
        }
        return true;
    }

    public get models(): ICreatableRoomModel[]
    {
        return this._models;
    }
}
