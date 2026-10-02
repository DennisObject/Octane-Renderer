import { ClientDeviceCategoryEnum, ClientPlatformEnum, IMessageComposer } from '@octane/api';
import { FloorPlanRevisionName, FloorPlanWireProfile } from '../../floorplan/FloorPlanProtocol';

export class ClientHelloMessageComposer implements IMessageComposer<ConstructorParameters<typeof ClientHelloMessageComposer>>
{
    private _data: ConstructorParameters<typeof ClientHelloMessageComposer>;

    constructor(releaseVersion: string, type: string, platform: number, category: number)
    {
        this._data = [
            releaseVersion || FloorPlanRevisionName[FloorPlanWireProfile.Hybrid],
            type || 'HTML5',
            platform ?? ClientPlatformEnum.HTML5,
            category ?? ClientDeviceCategoryEnum.BROWSER
        ];
    }

    public getMessageArray()
    {
        return this._data;
    }

    public dispose(): void
    {
        return;
    }
}
