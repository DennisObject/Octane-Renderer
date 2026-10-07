import { IncomingHeader } from '../incoming/IncomingHeader';
import { OutgoingHeader } from '../outgoing/OutgoingHeader';

/**
 * Active wire for this Octane renderer plus the September floor-plan editor.
 * It is not a claim that the whole client speaks the official AIR build.
 * Legacy Nitro stays a separate profile selected with floorplan.wire.profile.
 * CommunicationManager reads that key in init, after configuration has loaded.
 */
export const FloorPlanWireProfile = {
    Hybrid: 'octane-floor-20260909',
    Legacy: 'legacy-nitro-1-6-6'
} as const;

export type FloorPlanWireProfileName = (typeof FloorPlanWireProfile)[keyof typeof FloorPlanWireProfile];

export const FLOOR_PLAN_WIRE_PROFILE_KEY = 'floorplan.wire.profile';

export const FloorPlanRevisionName: Record<FloorPlanWireProfileName, string> = {
    [FloorPlanWireProfile.Hybrid]: 'OCTANE-3-6-0-FLOOR-20260909',
    [FloorPlanWireProfile.Legacy]: 'NITRO-1-6-6'
};

/**
 * WIN63-202609091217-117204808 floor-plan headers.
 * The two empty request names are inferred from legacy-named-201611291003
 * call-site pairing; September exposes obfuscated class_2522 / class_3636.
 */
export const SeptemberFloorPlanHeaders = {
    getOccupiedTiles: 2597,
    getRoomEntryTile: 2735,
    updateFloorProperties: 234,
    roomOccupiedTiles: 2757,
    roomEntryTile: 2959,
    roomVisualizationSettings: 1392,
    floorHeightMap: 1589
} as const;

/** legacy-named-201611291003 and the NITRO-1-6-6 revision. */
export const LegacyFloorPlanHeaders = {
    getOccupiedTiles: 1687,
    getRoomEntryTile: 3559,
    updateFloorProperties: 875,
    roomOccupiedTiles: 3990,
    roomEntryTile: 1664,
    roomVisualizationSettings: 3547,
    floorHeightMap: 1301
} as const;

/**
 * Resolve collisions with the September floor-plan and membership headers.
 * Unsupported composers retain registration at unused high header aliases.
 * Marketplace is mirrored by the matching PlusEMU revision. The guide composer
 * has no PlusEMU handler; its alias keeps it registered.
 * Basic membership extension uses PlusEMU's reserved custom header 6001.
 */
export const FloorPlanCollisionAlias = {
    marketplaceConfig: 65001,
    purchaseBasicMembershipExtension: 6001,
    guideSessionInviteRequester: 65003
} as const;

export function configuredFloorPlanWireProfile(configured?: string | null): FloorPlanWireProfileName
{
    if(configured === FloorPlanWireProfile.Legacy || configured === FloorPlanRevisionName[FloorPlanWireProfile.Legacy])
        return FloorPlanWireProfile.Legacy;

    return FloorPlanWireProfile.Hybrid;
}

export function floorPlanRevisionName(profile: FloorPlanWireProfileName): string
{
    return FloorPlanRevisionName[profile];
}

export function applyFloorPlanWireProfile(events: Map<number, Function>, composers: Map<number, Function>, profile: FloorPlanWireProfileName): void
{
    if(profile === FloorPlanWireProfile.Legacy) return;

    moveHeader(composers, OutgoingHeader.MARKETPLACE_CONFIG, FloorPlanCollisionAlias.marketplaceConfig);
    moveHeader(composers, OutgoingHeader.PURCHASE_BASIC_MEMBERSHIP_EXTENSION, FloorPlanCollisionAlias.purchaseBasicMembershipExtension);
    moveHeader(composers, OutgoingHeader.GUIDE_SESSION_INVITE_REQUESTER, FloorPlanCollisionAlias.guideSessionInviteRequester);
    moveHeader(composers, OutgoingHeader.GET_OCCUPIED_TILES, SeptemberFloorPlanHeaders.getOccupiedTiles);
    moveHeader(composers, OutgoingHeader.GET_ROOM_ENTRY_TILE, SeptemberFloorPlanHeaders.getRoomEntryTile);
    moveHeader(composers, OutgoingHeader.ROOM_MODEL_SAVE, SeptemberFloorPlanHeaders.updateFloorProperties);
    moveHeader(events, IncomingHeader.ROOM_MODEL, SeptemberFloorPlanHeaders.floorHeightMap);
    moveHeader(events, IncomingHeader.ROOM_MODEL_BLOCKED_TILES, SeptemberFloorPlanHeaders.roomOccupiedTiles);
    moveHeader(events, IncomingHeader.ROOM_MODEL_DOOR, SeptemberFloorPlanHeaders.roomEntryTile);
    moveHeader(events, IncomingHeader.ROOM_THICKNESS, SeptemberFloorPlanHeaders.roomVisualizationSettings);
}

const moveHeader = (map: Map<number, Function>, from: number, to: number): void =>
{
    if(from === to) return;

    const handler = map.get(from);

    if(!handler) throw new Error(`Floor plan profile is missing header ${ from }`);

    if(map.has(to)) throw new Error(`Floor plan profile header ${ to } is already registered`);

    map.delete(from);
    map.set(to, handler);
};
