import { IConnection } from '@octane/api';
import { OctaneEvent } from '../core/OctaneEvent';

/** Local notification for a refused catalog parser; never a successful wire message. */
export class WiredCatalogParseFailureEvent extends OctaneEvent
{
    public static readonly TYPE = 'WIRED_CATALOG_PARSE_FAILURE';

    constructor(private readonly _connection: IConnection, private readonly _header: number)
    {
        super(WiredCatalogParseFailureEvent.TYPE);
    }

    public get connection(): IConnection
    {
        return this._connection;
    }

    public get header(): number
    {
        return this._header;
    }
}
