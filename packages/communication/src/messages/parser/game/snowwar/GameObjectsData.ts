import { IMessageDataWrapper } from '@octane/api';
import { SnowWarGameObjectData } from './SnowWarGameObjectData';

/** AIR `GameObjectsData`. */
export class GameObjectsData
{
    public readonly gameObjects: SnowWarGameObjectData[] = [];

    constructor(wrapper: IMessageDataWrapper)
    {
        let count = wrapper.readInt();

        while(count-- > 0)
        {
            const type = wrapper.readInt();
            const id = wrapper.readInt();

            this.gameObjects.push(new SnowWarGameObjectData(type, id, wrapper));
        }
    }
}
