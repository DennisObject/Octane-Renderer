import type { IMessageComposer } from '@octane/api';

export class RoomUnitChatStyleComposer implements IMessageComposer<ConstructorParameters<typeof RoomUnitChatStyleComposer>>
{
    private _data: ConstructorParameters<typeof RoomUnitChatStyleComposer>;

    constructor(styleId: number, fontScale: number = 0)
    {
        this._data = [styleId, fontScale];
    }

    public getMessageArray()
    {
        return this._data;
    }

    public dispose(): void
    {
        return;
    }
}
