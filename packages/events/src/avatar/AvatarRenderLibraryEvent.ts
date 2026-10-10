import { IAvatarAssetDownloadLibrary } from '@volt/api';
import { VoltEvent } from '../core';

export class AvatarRenderLibraryEvent extends VoltEvent
{
    public static DOWNLOAD_COMPLETE: string = 'ARLE_DOWNLOAD_COMPLETE';

    private _library: IAvatarAssetDownloadLibrary;

    constructor(type: string, library: IAvatarAssetDownloadLibrary)
    {
        super(type);

        this._library = library;
    }

    public get library(): IAvatarAssetDownloadLibrary
    {
        return this._library;
    }
}
