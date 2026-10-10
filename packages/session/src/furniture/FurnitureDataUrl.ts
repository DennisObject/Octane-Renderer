import { GetConfiguration } from '@volt/configuration';

/** Config key the client sets to the version of the furnidata it boots with (e.g. its SHA-1, from the entry page). */
export const FURNIDATA_VERSION_KEY = 'furnidata.version';

/**
 * The furnidata URL. With a known version, the boot load asks for that exact version (?v= in place of the
 * ?t= cache buster), which the server lets browsers and the edge cache for good. Reloads use the plain URL.
 */
export const GetFurnitureDataUrl = (versioned: boolean = false): string =>
{
    const url = GetConfiguration().getValue<string>('furnidata.url', '');
    const version = versioned ? GetConfiguration().getValue<string>(FURNIDATA_VERSION_KEY, '') : '';

    if(!url || !version) return url;

    try
    {
        const versionedUrl = new URL(url, globalThis.location?.href);

        versionedUrl.searchParams.delete('t');
        versionedUrl.searchParams.set('v', version);

        return versionedUrl.toString();
    }
    catch
    {
        return url;
    }
};
