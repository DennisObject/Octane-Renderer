import { VoltEvent } from '../core';

export class SessionDataPreferencesEvent extends VoltEvent
{
    public static UPDATED: string = 'APUE_UPDATED';

    private _uiFlags: number;

    constructor(uiFlags: number)
    {
        super(SessionDataPreferencesEvent.UPDATED);

        this._uiFlags = uiFlags;
    }

    public get uiFlags(): number
    {
        return this._uiFlags;
    }
}
