import { IMessageDataWrapper, IMessageParser } from '@octane/api';

/** Octane adapter for the historical Turbo settings result; success is explicit. */
export class WiredChestSettingsAckParser implements IMessageParser
{
    public chestId = 0;
    public saved = false;
    public flush(): boolean { this.chestId = 0; this.saved = false; return true; }
    public parse(wrapper: IMessageDataWrapper): boolean { this.chestId = wrapper.readInt(); this.saved = wrapper.readBoolean(); return true; }
}
