import { ClientDeviceCategoryEnum, ClientPlatformEnum } from '@octane/api';
import { describe, expect, it } from 'vitest';
import { EvaWireFormat } from '../../codec/evawire';
import { MessageClassManager } from '../MessageClassManager';
import { OctaneMessages } from '../../OctaneMessages';
import { IncomingHeader } from '../incoming/IncomingHeader';
import { FloorHeightMapEvent } from '../incoming/room/mapping/FloorHeightMapEvent';
import { RoomEntryTileMessageEvent } from '../incoming/room/mapping/RoomEntryTileMessageEvent';
import { RoomOccupiedTilesMessageEvent } from '../incoming/room/mapping/RoomOccupiedTilesMessageEvent';
import { RoomVisualizationSettingsEvent } from '../incoming/room/mapping/RoomVisualizationSettingsEvent';
import { OutgoingHeader } from '../outgoing/OutgoingHeader';
import { PurchaseBasicMembershipExtensionComposer } from '../outgoing/catalog/PurchaseBasicMembershipExtensionComposer';
import { ClientHelloMessageComposer } from '../outgoing/handshake/ClientHelloMessageComposer';
import { GuideSessionInviteRequesterMessageComposer } from '../outgoing/help/GuideSessionInviteRequesterMessageComposer';
import { GetMarketplaceConfigurationMessageComposer } from '../outgoing/marketplace/GetMarketplaceConfigurationMessageComposer';
import { GetOccupiedTilesMessageComposer } from '../outgoing/room/layout/GetOccupiedTilesMessageComposer';
import { GetRoomEntryTileMessageComposer } from '../outgoing/room/layout/GetRoomEntryTileMessageComposer';
import { UpdateFloorPropertiesMessageComposer } from '../outgoing/room/layout/UpdateFloorPropertiesMessageComposer';
import { FloorPlanCollisionAlias, FloorPlanRevisionName, FloorPlanWireProfile, SeptemberFloorPlanHeaders, configuredFloorPlanWireProfile } from './FloorPlanProtocol';

const headerShort = (header: number): number =>
{
    const encoded = new EvaWireFormat().encode(header, []).getBuffer();
    const bytes = new Uint8Array(encoded);

    return ((bytes[4] << 8) | bytes[5]) >>> 0;
};

describe('active floor plan wire profile', () =>
{
    it('negotiates the hybrid revision and still accepts an explicit legacy hello', () =>
    {
        const hybrid = clientHelloOnWire(null, null, null, null);
        const legacy = clientHelloOnWire(FloorPlanRevisionName[FloorPlanWireProfile.Legacy], 'FLASH', 0, 1);
        const sentinel = clientHelloOnWire('SENTINEL-RELEASE', null, null, null);

        expect(hybrid.header).toBe(OutgoingHeader.RELEASE_VERSION);
        expect(hybrid.release).toBe(FloorPlanRevisionName[FloorPlanWireProfile.Hybrid]);
        expect(hybrid.release).not.toBe('NITRO-3-6-0');
        expect(hybrid.type).toBe('HTML5');
        expect(hybrid.platform).toBe(ClientPlatformEnum.HTML5);
        expect(hybrid.category).toBe(ClientDeviceCategoryEnum.BROWSER);
        expect(legacy).toEqual({
            header: OutgoingHeader.RELEASE_VERSION,
            release: 'NITRO-1-6-6',
            type: 'FLASH',
            platform: 0,
            category: 1
        });
        expect(sentinel.release).toBe('SENTINEL-RELEASE');
        expect(sentinel.release).not.toBe('NITRO-3-6-0');
        expect(configuredFloorPlanWireProfile(undefined)).toBe(FloorPlanWireProfile.Hybrid);
        expect(configuredFloorPlanWireProfile(FloorPlanWireProfile.Legacy)).toBe(FloorPlanWireProfile.Legacy);
        expect(configuredFloorPlanWireProfile('NITRO-1-6-6')).toBe(FloorPlanWireProfile.Legacy);
        expect(configuredFloorPlanWireProfile('WIN63-202609091217-117204808')).toBe(FloorPlanWireProfile.Hybrid);
    });

    it('sends September floor requests and receives their responses from constructed messages', () =>
    {
        const messages = new MessageClassManager();

        messages.registerMessages(new OctaneMessages());

        const occupied = new GetOccupiedTilesMessageComposer();
        const entry = new GetRoomEntryTileMessageComposer();
        const save = new UpdateFloorPropertiesMessageComposer('0');

        expect(messages.getComposerId(occupied)).toBe(SeptemberFloorPlanHeaders.getOccupiedTiles);
        expect(messages.getComposerId(entry)).toBe(SeptemberFloorPlanHeaders.getRoomEntryTile);
        expect(messages.getComposerId(save)).toBe(SeptemberFloorPlanHeaders.updateFloorProperties);
        expect(headerShort(messages.getComposerId(occupied))).toBe(2597);
        expect(headerShort(messages.getComposerId(entry))).toBe(2735);
        expect(headerShort(messages.getComposerId(save))).toBe(234);
        expect(messages.getEventId(new FloorHeightMapEvent(() => undefined))).toBe(1589);
        expect(messages.getEventId(new RoomOccupiedTilesMessageEvent(() => undefined))).toBe(2757);
        expect(messages.getEventId(new RoomEntryTileMessageEvent(() => undefined))).toBe(2959);
        expect(messages.getEventId(new RoomVisualizationSettingsEvent(() => undefined))).toBe(1392);
        expect(messages.getComposerId(new GetMarketplaceConfigurationMessageComposer())).toBe(FloorPlanCollisionAlias.marketplaceConfig);
        expect(messages.getComposerId(new PurchaseBasicMembershipExtensionComposer(1))).toBe(FloorPlanCollisionAlias.purchaseBasicMembershipExtension);
        expect(messages.getComposerId(new GuideSessionInviteRequesterMessageComposer())).toBe(FloorPlanCollisionAlias.guideSessionInviteRequester);
        expect(headerShort(FloorPlanCollisionAlias.marketplaceConfig)).toBe(65001);
    });

    it('keeps every other registered handler on its original header', () =>
    {
        const legacy = new OctaneMessages(FloorPlanWireProfile.Legacy);
        const hybrid = new OctaneMessages(FloorPlanWireProfile.Hybrid);
        const movedComposers = new Set<Function>([
            GetOccupiedTilesMessageComposer,
            GetRoomEntryTileMessageComposer,
            UpdateFloorPropertiesMessageComposer,
            GetMarketplaceConfigurationMessageComposer,
            PurchaseBasicMembershipExtensionComposer,
            GuideSessionInviteRequesterMessageComposer
        ]);
        const movedEvents = new Set<Function>([
            FloorHeightMapEvent,
            RoomOccupiedTilesMessageEvent,
            RoomEntryTileMessageEvent,
            RoomVisualizationSettingsEvent
        ]);

        expect(handlersByClass(hybrid.composers).size).toBe(handlersByClass(legacy.composers).size);
        expect(handlersByClass(hybrid.events).size).toBe(handlersByClass(legacy.events).size);

        for(const [handler, header] of handlersByClass(legacy.composers))
        {
            const wired = handlersByClass(hybrid.composers).get(handler);

            expect(wired).toBeTypeOf('number');

            if(!movedComposers.has(handler)) expect(wired).toBe(header);
        }

        for(const [handler, header] of handlersByClass(legacy.events))
        {
            const wired = handlersByClass(hybrid.events).get(handler);

            expect(wired).toBeTypeOf('number');

            if(!movedEvents.has(handler)) expect(wired).toBe(header);
        }

        expect(legacy.composers.get(OutgoingHeader.MARKETPLACE_CONFIG)).toBe(GetMarketplaceConfigurationMessageComposer);
        expect(legacy.events.get(IncomingHeader.ROOM_MODEL)).toBe(FloorHeightMapEvent);
        expect(hybrid.composers.get(SeptemberFloorPlanHeaders.getOccupiedTiles)).toBe(GetOccupiedTilesMessageComposer);
        expect(hybrid.composers.get(FloorPlanCollisionAlias.marketplaceConfig)).toBe(GetMarketplaceConfigurationMessageComposer);
        expect(hybrid.events.get(SeptemberFloorPlanHeaders.floorHeightMap)).toBe(FloorHeightMapEvent);
        expect(hybrid.events.has(IncomingHeader.ROOM_MODEL)).toBe(false);
    });
});

const clientHelloOnWire = (releaseVersion: string, type: string, platform: number, category: number): { header: number, release: string, type: string, platform: number, category: number } =>
{
    const messages = new MessageClassManager();

    messages.registerMessages(new OctaneMessages());

    const composer = new ClientHelloMessageComposer(releaseVersion, type, platform, category);
    const encoded = new EvaWireFormat().encode(messages.getComposerId(composer), composer.getMessageArray()).getBuffer();
    const bytes = new Uint8Array(encoded);
    let offset = 6;
    const readShort = (): number =>
    {
        const value = ((bytes[offset] << 8) | bytes[offset + 1]) >>> 0;

        offset += 2;

        return value;
    };
    const readInt = (): number =>
    {
        const value = ((bytes[offset] << 24) | (bytes[offset + 1] << 16) | (bytes[offset + 2] << 8) | bytes[offset + 3]) >>> 0;

        offset += 4;

        return value;
    };
    const readString = (): string =>
    {
        const length = readShort();
        const value = new TextDecoder().decode(bytes.subarray(offset, offset + length));

        offset += length;

        return value;
    };

    return {
        header: ((bytes[4] << 8) | bytes[5]) >>> 0,
        release: readString(),
        type: readString(),
        platform: readInt(),
        category: readInt()
    };
};

const handlersByClass = (map: Map<number, Function>): Map<Function, number> =>
{
    const handlers = new Map<Function, number>();

    for(const [header, handler] of map)
    {
        if(handlers.has(handler)) throw new Error(`Handler is registered twice (${ header })`);

        handlers.set(handler, header);
    }

    return handlers;
};
