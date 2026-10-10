import { VoltEvent } from '@volt/events';

export class SongDiskInventoryReceivedEvent extends VoltEvent
{
    public static readonly SDIR_SONG_DISK_INVENTORY_RECEIVENT_EVENT = 'SDIR_SONG_DISK_INVENTORY_RECEIVENT_EVENT';

    constructor(type:string)
    {
        super(type);
    }
}
