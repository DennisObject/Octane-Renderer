import { IMessageDataWrapper } from '@volt/api';
import { GameObjectsData } from './GameObjectsData';
import { GameStatusData } from './GameStatusData';

/** AIR `FullGameStatusData`; the two unnamed ints are read and dropped like AIR does. */
export class FullGameStatusData
{
    public readonly remainingTimeSeconds: number;
    public readonly durationInSeconds: number;
    public readonly gameObjects: GameObjectsData;
    public readonly numberOfTeams: number;
    public readonly gameStatus: GameStatusData;

    constructor(wrapper: IMessageDataWrapper)
    {
        wrapper.readInt();
        this.remainingTimeSeconds = wrapper.readInt();
        this.durationInSeconds = wrapper.readInt();
        this.gameObjects = new GameObjectsData(wrapper);
        wrapper.readInt();
        this.numberOfTeams = wrapper.readInt();
        this.gameStatus = new GameStatusData(wrapper);
    }
}
