import { IMessageComposer } from '@volt/api';

export class CatalogAdminSavePageComposer implements IMessageComposer<ConstructorParameters<typeof CatalogAdminSavePageComposer>>
{
    private _data: ConstructorParameters<typeof CatalogAdminSavePageComposer>;

    constructor(pageId: number, caption: string, caption2: string, layout: string, iconType: number, requiredPermission: string, visible: boolean, enabled: boolean, orderNum: number, parentId: number, headline: string, teaser: string, textDetails: string, targetCatalogType: string, catalogMode: string = 'NORMAL', pageText1: string = '', iconColor: number = 1, clubOnly: boolean = false, pageSpecial: string = '', pageText2: string = '', pageTextTeaser: string = '', roomId: number = 0, includes: string = '', draftVersionId: number = 0, expectedRevision: number = 0, lockToken: string = '', summary: string = '', operationId: string = '')
    {
        this._data = [ pageId, caption, caption2, layout, iconType, requiredPermission, visible, enabled, orderNum, parentId, headline, teaser, textDetails, targetCatalogType, catalogMode, pageText1, iconColor, clubOnly, pageSpecial, pageText2, pageTextTeaser, roomId, includes, draftVersionId, expectedRevision, lockToken, summary, operationId ];
    }

    dispose(): void
    {
        this._data = null;
    }

    public getMessageArray()
    {
        return this._data;
    }
}
