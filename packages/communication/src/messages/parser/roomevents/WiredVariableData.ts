import { IMessageDataWrapper } from '@octane/api';

/**
 * One wired variable definition as the official AIR 13 client reads it
 * (`package_215.WiredVariable`).
 */
export interface IWiredVariableData
{
    variableId: string;
    variableType: number;
    variableName: string;
    availabilityType: number;
    variableTarget: number;
    alwaysAvailable: boolean;
    canCreateAndDelete: boolean;
    hasValue: boolean;
    canWriteValue: boolean;
    canInterceptChanges: boolean;
    isInvisible: boolean;
    canReadCreationTime: boolean;
    canReadLastUpdateTime: boolean;
    textConnector: { key: number; value: string }[] | null;
}

/** Reads the official `WiredVariable` block from the wrapper. */
export function parseWiredVariableData(wrapper: IMessageDataWrapper): IWiredVariableData
{
    const variableId = wrapper.readString();
    const variableType = wrapper.readInt();
    const variableName = wrapper.readString();
    const availabilityType = wrapper.readInt();
    const variableTarget = wrapper.readInt();
    const alwaysAvailable = wrapper.readBoolean();
    const canCreateAndDelete = wrapper.readBoolean();
    const hasValue = wrapper.readBoolean();
    const canWriteValue = wrapper.readBoolean();
    const canInterceptChanges = wrapper.readBoolean();
    const isInvisible = wrapper.readBoolean();
    const canReadCreationTime = wrapper.readBoolean();
    const canReadLastUpdateTime = wrapper.readBoolean();

    let textConnector: { key: number; value: string }[] = null;

    if(wrapper.readBoolean())
    {
        textConnector = [];

        const totalConnectors = wrapper.readInt();

        for(let i = 0; i < totalConnectors; i++)
        {
            const key = wrapper.readInt();
            const value = wrapper.readString();

            textConnector.push({ key, value });
        }
    }

    return {
        variableId,
        variableType,
        variableName,
        availabilityType,
        variableTarget,
        alwaysAvailable,
        canCreateAndDelete,
        hasValue,
        canWriteValue,
        canInterceptChanges,
        isInvisible,
        canReadCreationTime,
        canReadLastUpdateTime,
        textConnector
    };
}

/** The wire uses two 32-bit halves for every `long`, exactly like the official client. */
export function readWiredLong(wrapper: IMessageDataWrapper): number
{
    const high = wrapper.readInt() >>> 0;
    const low = wrapper.readInt() >>> 0;

    return (high * 0x100000000) + low;
}

/** A signed `long` sent as two 32-bit halves; the high half carries the sign. */
export function readWiredSignedLong(wrapper: IMessageDataWrapper): bigint
{
    return (BigInt(wrapper.readInt()) << 32n) | BigInt(wrapper.readInt() >>> 0);
}

export const WIRED_INT64_MIN = -(1n << 63n);
export const WIRED_INT64_MAX = (1n << 63n) - 1n;
export function parseWiredInt64(value: string | bigint | number): bigint
{
    if(typeof value === 'number' && !Number.isSafeInteger(value)) throw new RangeError('Inexact variable value');
    if(typeof value === 'string' && !/^-?\d+$/.test(value)) throw new RangeError('Invalid integer');
    const exact = BigInt(value);
    if(exact < WIRED_INT64_MIN || exact > WIRED_INT64_MAX) throw new RangeError('Variable value is outside signed 64-bit range');
    return exact;
}
export function wiredInt64Parts(value: string | bigint | number): [number, number]
{
    const exact = parseWiredInt64(value);
    return [Number(BigInt.asIntN(32, exact >> 32n)), Number(BigInt.asIntN(32, exact))];
}
