import { ContextMenuEnum } from '@volt/api';
import { FurnitureMultiStateLogic } from './FurnitureMultiStateLogic';

export class FurnitureRandomTeleportLogic extends FurnitureMultiStateLogic
{
    public get contextMenu(): string
    {
        return ContextMenuEnum.RANDOM_TELEPORT;
    }
}
