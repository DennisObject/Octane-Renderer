import { RoomObjectCategory, RoomObjectPlacementSource, RoomObjectType } from '@octane/api';
import { describe, expect, it, vi } from 'vitest';
import { RoomObjectEventHandler } from './RoomObjectEventHandler';

vi.mock('./GetRoomEngine', () => ({
    GetRoomEngine: () => null
}));

describe('inventory pet preview IDs', () =>
{
    const createHandler = () =>
    {
        const handler = Object.create(RoomObjectEventHandler.prototype) as RoomObjectEventHandler;
        const setSelectedRoomObjectData = vi.fn();
        const setObjectMoverIconSprite = vi.fn();

        Object.assign(handler, {
            setSelectedRoomObjectData,
            _roomEngine: {
                setObjectMoverIconSprite,
                setObjectMoverIconSpriteVisible: vi.fn()
            }
        });

        return { handler, setSelectedRoomObjectData, setObjectMoverIconSprite };
    };

    it.each([0, 1, NaN, -1.5])('rejects invalid preview ID %s before selecting or changing room objects', id =>
    {
        const { handler, setSelectedRoomObjectData, setObjectMoverIconSprite } = createHandler();

        expect(handler.processRoomObjectPlacement(RoomObjectPlacementSource.INVENTORY, 1, id, RoomObjectCategory.UNIT, RoomObjectType.PET, '12 2 FFFFFF')).toBe(false);
        expect(setSelectedRoomObjectData).not.toHaveBeenCalled();
        expect(setObjectMoverIconSprite).not.toHaveBeenCalled();
    });

    it('accepts a negative preview ID for a persisted pet', () =>
    {
        const { handler, setSelectedRoomObjectData } = createHandler();

        expect(handler.processRoomObjectPlacement(RoomObjectPlacementSource.INVENTORY, 1, -42, RoomObjectCategory.UNIT, RoomObjectType.PET, '12 2 FFFFFF')).toBe(true);
        expect(setSelectedRoomObjectData).toHaveBeenCalledWith(1, -42, RoomObjectCategory.UNIT, expect.anything(), expect.anything(), expect.anything(), RoomObjectType.PET, '12 2 FFFFFF', null, -1, -1, null);
    });
});
