import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { PhotoCompetitionMessageComposer } from '../../outgoing/camera/PhotoCompetitionMessageComposer';
import { PublishPhotoMessageComposer } from '../../outgoing/camera/PublishPhotoMessageComposer';
import { loadPacketContractManifest } from '../PacketContractManifest';
import { verifyPacketContract } from '../PacketContractVerifier';
import { extractTypeScriptPacketSignature } from '../TypeScriptPacketSignatureExtractor';

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

    it('matches the optional checkoutId packet field', () =>
    {
        const manifest = loadPacketContractManifest('protocol/packet-field-contracts.json');

        for(const name of [ 'PUBLISH_PHOTO', 'PHOTO_COMPETITION' ])
        {
            const contract = manifest.contracts.find(entry => entry.name === name && entry.direction === 'client_to_server');
            const observed = extractTypeScriptPacketSignature(resolve(contract.typescript.path), 'outgoing');

            expect(observed.unsupportedReason).toBeUndefined();
            verifyPacketContract(contract.fields, observed.fields, name);
        }
    });
});
