import { FriendFurniEngravingWidgetType } from '@volt/api';
import { FurnitureFriendFurniLogic } from './FurnitureFriendFurniLogic';

export class FurnitureWildWestWantedLogic extends FurnitureFriendFurniLogic
{
    public get engravingDialogType(): number
    {
        return FriendFurniEngravingWidgetType.WILD_WEST_WANTED;
    }
}
