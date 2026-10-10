import { VoltEvent } from './VoltEvent';

export class ConfigurationEvent extends VoltEvent
{
    public static LOADED: string = 'NCE_LOADED';
    public static FAILED: string = 'NCE_FAILED';

    constructor(type: string)
    {
        super(type);
    }
}
