import { VoltEvent } from '@volt/events';

export class PlayListStatusEvent extends VoltEvent
{
    public static readonly PLUE_PLAY_LIST_UPDATED = 'PLUE_PLAY_LIST_UPDATED';
    public static readonly PLUE_PLAY_LIST_FULL = 'PLUE_PLAY_LIST_FULL';

    constructor(type:string)
    {
        super(type);
    }
}
