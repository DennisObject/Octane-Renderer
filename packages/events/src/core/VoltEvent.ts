import { IVoltEvent } from '@volt/api';

export class VoltEvent implements IVoltEvent
{
    private _type: string;

    constructor(type: string)
    {
        this._type = type;
    }

    public get type(): string
    {
        return this._type;
    }
}
