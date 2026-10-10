import { VoltEvent } from '../core';

export class RoomToObjectEvent extends VoltEvent
{
    public constructor(type: string)
    {
        super(type);
    }
}
