import { IMessageDataWrapper, IMessageParser } from '@volt/api';

export class CameraStorageUrlMessageParser implements IMessageParser
{
    private _url: string;
    private _png: ArrayBuffer = null;

    public flush(): boolean
    {
        this._url = '';
        this._png = null;

        return true;
    }

    public parse(wrapper: IMessageDataWrapper): boolean
    {
        if(!wrapper) return false;

        this._url = wrapper.readString();
        this._png = null;

        // Older servers send only the URL payload. Optional bytes never replace its identity.
        if(wrapper.remainingBytes >= 4)
        {
            try
            {
                const length = JSON.parse(this._url)?.inline;

                if(Number.isInteger(length) && (length >= 33) && (length <= 512 * 1024) &&
                    (wrapper.readInt() === length) && (wrapper.remainingBytes === length))
                {
                    const png = wrapper.readBytes(length).toArrayBuffer();
                    const bytes = new Uint8Array(png);
                    const header = new DataView(png);

                    if([137, 80, 78, 71, 13, 10, 26, 10].every((value, index) => bytes[index] === value) &&
                        (header.getUint32(8) === 13) && (header.getUint32(12) === 0x49484452) &&
                        (header.getUint32(16) === 320) && (header.getUint32(20) === 320)) this._png = png;
                }
            }
            catch
            {
                // A malformed optimization falls back to loading the persisted URL.
            }
        }

        return true;
    }

    public get url(): string
    {
        return this._url;
    }

    public get png(): ArrayBuffer
    {
        return this._png;
    }
}
