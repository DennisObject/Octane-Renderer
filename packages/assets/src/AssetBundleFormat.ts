import { GetConfiguration } from '@octane/configuration';
import { normalizedSourceExtension } from './image';

/** The asset bundle format a hotel serves: official Habbo `.hab` files (the default) or Nitro `.nitro` files. */
export type AssetBundleFormat = 'hab' | 'nitro';

export const ASSET_BUNDLE_FORMAT_KEY = 'asset.bundle.format';

const BUNDLE_EXTENSION = /\.(?:hab|nitro)(?=$|[?#])/i;

export const GetAssetBundleFormat = (): AssetBundleFormat =>
    (String(GetConfiguration().getValue<string>(ASSET_BUNDLE_FORMAT_KEY, 'hab')).trim().toLowerCase() === 'nitro') ? 'nitro' : 'hab';

export const isAssetBundleUrl = (url: string): boolean =>
{
    const extension = normalizedSourceExtension(url);

    return (extension === 'hab') || (extension === 'nitro');
};

/**
 * A bundle URL with the extension of the configured format, whichever one the URL template uses,
 * so `asset.bundle.format` alone decides what the client downloads.
 */
export const GetAssetBundleUrl = (url: string, format: AssetBundleFormat = GetAssetBundleFormat()): string =>
    (url && isAssetBundleUrl(url)) ? url.replace(BUNDLE_EXTENSION, `.${ format }`) : url;
