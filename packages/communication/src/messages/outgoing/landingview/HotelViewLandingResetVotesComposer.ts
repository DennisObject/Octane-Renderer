import { IMessageComposer } from '@volt/api';

export class HotelViewLandingResetVotesComposer implements IMessageComposer<number[]>
{
    private _data: number[];

    constructor(slotId: number)
    {
        this._data = [slotId];
    }

    public getMessageArray(): number[]
    {
        return this._data;
    }
    public dispose(): void
    {
        return;
    }
}
