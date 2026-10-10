import { VoltEvent } from '../core';

export class RoomCameraWidgetManagerEvent extends VoltEvent
{
    public static INITIALIZED: string = 'RCWM_INITIALIZED';

    constructor(type: string)
    {
        super(type);
    }
}
