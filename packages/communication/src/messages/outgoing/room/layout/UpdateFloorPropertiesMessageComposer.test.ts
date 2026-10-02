import { describe, expect, it } from 'vitest';
import { UpdateFloorPropertiesMessageComposer } from './UpdateFloorPropertiesMessageComposer';

describe('UpdateFloorPropertiesMessageComposer', () =>
{
    it('sends only the map when door and thickness are unset', () =>
    {
        const composer = new UpdateFloorPropertiesMessageComposer('0');

        expect(composer.getMessageArray()).toEqual(['0']);
    });

    it('omits wall height when it is the official unset value', () =>
    {
        const composer = new UpdateFloorPropertiesMessageComposer('00\r00', 1, 0, 2, -2, 1, -1);

        expect(composer.getMessageArray()).toEqual(['00\r00', 1, 0, 2, -2, 1]);
    });

    it('appends wall height only when a fixed height is selected', () =>
    {
        const composer = new UpdateFloorPropertiesMessageComposer('00\r00', 1, 0, 2, 0, 0, 4);

        expect(composer.getMessageArray()).toEqual(['00\r00', 1, 0, 2, 0, 0, 4]);
    });
});
