import { IMessageDataWrapper } from '@volt/api';
import { SnowWarGameEventData } from './SnowWarGameEventData';

/** AIR `GameStatusData`: `events[subturn]` lists the events scheduled for turn + 1. */
export class GameStatusData
{
    public readonly turn: number;
    public readonly checksum: number;
    public readonly events: SnowWarGameEventData[][] = [];

    constructor(wrapper: IMessageDataWrapper)
    {
        this.turn = wrapper.readInt();
        this.checksum = wrapper.readInt();

        const subturns = wrapper.readInt();

        for(let subturn = 0; subturn < subturns; subturn++)
        {
            const events: SnowWarGameEventData[] = [];
            let count = wrapper.readInt();

            while(count-- > 0)
            {
                const event = SnowWarGameEventData.create(wrapper.readInt(), wrapper);

                if(event) events.push(event);
            }

            this.events.push(events);
        }
    }
}
