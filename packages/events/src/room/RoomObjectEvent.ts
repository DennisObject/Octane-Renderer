import { IRoomObject } from '@volt/api';
import { VoltEvent } from '../core';

export class RoomObjectEvent extends VoltEvent
{
    private _object: IRoomObject;

    constructor(type: string, object: IRoomObject)
    {
        super(type);

        this._object = object;
    }

    public get object(): IRoomObject
    {
        return this._object;
    }

    public get objectId(): number
    {
        if(!this._object) return -1;

        return this._object.id;
    }

    public get objectType(): string
    {
        if(!this._object) return null;

        return this._object.type;
    }
}
