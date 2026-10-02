import { GetConfiguration } from '@octane/configuration';
import { IMessageComposer } from '@octane/api';
import { afterEach, describe, expect, it } from 'vitest';
import { EvaWireFormat } from './codec/evawire';
import { CommunicationManager } from './CommunicationManager';
import { AvailabilityStatusMessageEvent } from './messages/incoming/availability/AvailabilityStatusMessageEvent';
import { IncomingHeader } from './messages/incoming/IncomingHeader';
import { FloorHeightMapEvent } from './messages/incoming/room/mapping/FloorHeightMapEvent';
import { OutgoingHeader } from './messages/outgoing/OutgoingHeader';
import { GetMarketplaceConfigurationMessageComposer } from './messages/outgoing/marketplace/GetMarketplaceConfigurationMessageComposer';
import { GetOccupiedTilesMessageComposer } from './messages/outgoing/room/layout/GetOccupiedTilesMessageComposer';
import { FloorPlanCollisionAlias, FLOOR_PLAN_WIRE_PROFILE_KEY, FloorPlanRevisionName, FloorPlanWireProfile, LegacyFloorPlanHeaders, SeptemberFloorPlanHeaders } from './messages/floorplan/FloorPlanProtocol';

const deliver = (manager: CommunicationManager, header: number, values: unknown[]): void =>
{
    manager.connection.dataBuffer = new EvaWireFormat().encode(header, values).getBuffer();
    manager.connection.processReceivedData();
};

const outgoingHeaders = (manager: CommunicationManager): number[] =>
{
    const headers: number[] = [];
    const codec = (manager.connection as unknown as {
        _codec: { encode: (header: number, messages: unknown[]) => { getBuffer(): ArrayBuffer } }
    })._codec;
    const encode = codec.encode.bind(codec);

    codec.encode = (header: number, messages: unknown[]) =>
    {
        headers.push(header);

        return encode(header, messages);
    };

    manager.connection.send(new GetOccupiedTilesMessageComposer());
    manager.connection.send(new GetMarketplaceConfigurationMessageComposer());

    return headers;
};

const helloRevision = async (manager: CommunicationManager): Promise<unknown> =>
{
    const payloads: unknown[][] = [];
    const send = manager.connection.send.bind(manager.connection);

    manager.connection.send = ((...composers: IMessageComposer<unknown[]>[]) =>
    {
        for(const composer of composers) payloads.push(composer.getMessageArray() as unknown[]);

        return send(...composers);
    }) as typeof manager.connection.send;

    (manager as unknown as { _machineIdPromise: Promise<string> })._machineIdPromise = Promise.resolve('IID-FLOOR-PROFILE');
    await (manager as unknown as { sendHandshake(): Promise<void> }).sendHandshake();

    return clientHelloRelease(payloads[0]);
};

const clientHelloRelease = (values: unknown[]): string =>
{
    const encoded = new EvaWireFormat().encode(OutgoingHeader.RELEASE_VERSION, values).getBuffer();
    const bytes = new Uint8Array(encoded);
    const length = ((bytes[6] << 8) | bytes[7]) >>> 0;

    return new TextDecoder().decode(bytes.subarray(8, 8 + length));
};

const start = (manager: CommunicationManager): void =>
{
    GetConfiguration().setValue('socket.url', '');
    void manager.init().catch(() => undefined);
};

describe('floor plan profile configuration lifecycle', () =>
{
    const managers: CommunicationManager[] = [];

    afterEach(() =>
    {
        for(const manager of managers)
        {
            manager.connection.dispose();
            manager.dispose();
        }

        managers.length = 0;
        GetConfiguration().resetConfiguration();
    });

    it('uses a legacy profile that arrives after construction and keeps the listener registered before init', async () =>
    {
        GetConfiguration().resetConfiguration();

        const manager = new CommunicationManager();
        let heightMaps = 0;
        let availability = 0;

        managers.push(manager);
        manager.registerMessageEvent(new FloorHeightMapEvent(() => heightMaps++));
        manager.registerMessageEvent(new AvailabilityStatusMessageEvent(() => availability++));

        deliver(manager, SeptemberFloorPlanHeaders.floorHeightMap, [ false, -1, '0' ]);
        expect(heightMaps).toBe(0);
        deliver(manager, LegacyFloorPlanHeaders.floorHeightMap, [ false, -1, '0' ]);
        expect(heightMaps).toBe(1);

        GetConfiguration().setValue(FLOOR_PLAN_WIRE_PROFILE_KEY, FloorPlanWireProfile.Legacy);
        start(manager);

        deliver(manager, SeptemberFloorPlanHeaders.floorHeightMap, [ false, -1, '0' ]);
        expect(heightMaps).toBe(1);
        deliver(manager, LegacyFloorPlanHeaders.floorHeightMap, [ false, -1, '0' ]);
        expect(heightMaps).toBe(2);
        deliver(manager, IncomingHeader.AVAILABILITY_STATUS, [ true, false ]);
        expect(availability).toBe(1);
        expect(outgoingHeaders(manager)).toEqual([
            LegacyFloorPlanHeaders.getOccupiedTiles,
            OutgoingHeader.MARKETPLACE_CONFIG
        ]);
        expect(await helloRevision(manager)).toBe(FloorPlanRevisionName[FloorPlanWireProfile.Legacy]);
    });

    it('selects the hybrid profile at init and moves listeners off the source headers', async () =>
    {
        GetConfiguration().resetConfiguration();

        const manager = new CommunicationManager();
        let heightMaps = 0;
        let availability = 0;

        managers.push(manager);
        manager.registerMessageEvent(new FloorHeightMapEvent(() => heightMaps++));
        manager.registerMessageEvent(new AvailabilityStatusMessageEvent(() => availability++));
        deliver(manager, LegacyFloorPlanHeaders.floorHeightMap, [ false, -1, '0' ]);
        expect(heightMaps).toBe(1);

        start(manager);

        deliver(manager, LegacyFloorPlanHeaders.floorHeightMap, [ false, -1, '0' ]);
        expect(heightMaps).toBe(1);
        deliver(manager, SeptemberFloorPlanHeaders.floorHeightMap, [ false, -1, '0' ]);
        expect(heightMaps).toBe(2);
        deliver(manager, IncomingHeader.AVAILABILITY_STATUS, [ true, false ]);
        expect(availability).toBe(1);
        expect(outgoingHeaders(manager)).toEqual([
            SeptemberFloorPlanHeaders.getOccupiedTiles,
            FloorPlanCollisionAlias.marketplaceConfig
        ]);
        expect(await helloRevision(manager)).toBe(FloorPlanRevisionName[FloorPlanWireProfile.Hybrid]);
    });
});
