import { describe, expect, it } from 'vitest';
import { PhotoCompetitionMessageComposer } from '../../outgoing/camera/PhotoCompetitionMessageComposer';
import { PublishPhotoMessageComposer } from '../../outgoing/camera/PublishPhotoMessageComposer';

describe('camera checkout composers', () =>
{
    it('emits checkoutId only when a string is given', () =>
    {
        expect(new PublishPhotoMessageComposer().getMessageArray()).toEqual([]);
        expect(new PublishPhotoMessageComposer(undefined).getMessageArray()).toEqual([]);
        expect(new PublishPhotoMessageComposer(null).getMessageArray()).toEqual([]);
        expect(new PublishPhotoMessageComposer('').getMessageArray()).toEqual([]);
        expect(new PublishPhotoMessageComposer('abc').getMessageArray()).toEqual([ 'abc' ]);
        expect(new PhotoCompetitionMessageComposer().getMessageArray()).toEqual([]);
        expect(new PhotoCompetitionMessageComposer('draft').getMessageArray()).toEqual([ 'draft' ]);
    });

});
