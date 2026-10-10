import { BinaryReader, BinaryWriter } from '@volt/utils';
import { gzip } from 'pako';
import { describe, expect, it } from 'vitest';
import { VoltMessages } from '../../../../VoltMessages';
import { IncomingHeader } from '../../../incoming/IncomingHeader';
import { OutgoingHeader } from '../../../outgoing/OutgoingHeader';
import { CatalogStudioHistoryComposer, CatalogStudioOpenSessionComposer, CatalogStudioUndoComposer } from '../../../outgoing/catalog/studio';
import { CatalogStudioHistoryMessageParser } from '../../../parser/catalog/studio/CatalogStudioHistoryMessageParser';
import { CatalogStudioSessionMessageParser } from '../../../parser/catalog/studio/CatalogStudioSessionMessageParser';

class TestWrapper
{
    constructor(private reader: BinaryReader)
    {}
    readByte()
    {
        return this.reader.readByte();
    }
    readBytes(length: number)
    {
        return this.reader.readBytes(length);
    }
    readBoolean()
    {
        return this.reader.readByte() === 1;
    }
    readShort()
    {
        return this.reader.readShort();
    }
    readInt()
    {
        return this.reader.readInt();
    }
    readFloat()
    {
        return this.reader.readFloat();
    }
    readDouble()
    {
        return this.reader.readDouble();
    }
    readString()
    {
        const length = this.reader.readShort(); return this.reader.readBytes(length).toString();
    }
    header = 0;
    get bytesAvailable()
    {
        return this.reader.remaining() > 0;
    }
}

describe('catalog studio packet contract', () =>
{
    it('uses the emulator headers and registers every request and response', () =>
    {
        const messages = new VoltMessages();

        [ 10067, 10071, 10072 ].forEach(header =>
            expect(messages.composers.has(header)).toBe(true));
        [ 10067, 10071, 10072 ].forEach(header =>
            expect(messages.events.has(header)).toBe(true));
        expect(OutgoingHeader.CATALOG_STUDIO_OPEN_SESSION).toBe(10067);
        expect(IncomingHeader.CATALOG_STUDIO_LOAD_HISTORY).toBe(10071);
    });

    it('serializes requests in the frozen emulator field order', () =>
    {
        expect(new CatalogStudioOpenSessionComposer().getMessageArray()).toEqual([]);
        expect(new CatalogStudioHistoryComposer(1, -4, 5000).getMessageArray()).toEqual([ 1, -4, 5000 ]);
        expect(new CatalogStudioUndoComposer('op-undo', 1, 7, 91).getMessageArray())
            .toEqual([ 'op-undo', 1, 7, 91 ]);
    });

    it('parses the direct-live manager session', () =>
    {
        const pages = [{
            catalogType: 'NORMAL', pageId: 17, parentId: -1, captionSave: 'front_page', caption: 'Front Page',
            pageLayout: 'default_3x3', iconColor: 0, iconImage: 1, minRank: 1, orderNum: 0,
            visible: true, enabled: true, clubOnly: false, catalogMode: 'NORMAL', vipOnly: false,
            pageHeadline: '', pageTeaser: '', pageSpecial: '', pageText1: '', pageText2: '',
            pageTextDetails: '', pageTextTeaser: '', roomId: 0, includes: ''
        }];
        const encodedPages = Buffer.from(gzip(JSON.stringify(pages))).toString('base64');
        const writer = new BinaryWriter();
        writer.writeInt(1); writer.writeInt(1); writer.writeInt(7);
        writer.writeString('2026-08-02T10:00:00Z'); writer.writeString('2026-08-02T10:05:00Z');
        writer.writeInt(0); writer.writeInt(0);
        writer.writeByte(1); writer.writeInt(2); writer.writeInt(0);
        writer.writeString('GZIP_BASE64_JSON'); writer.writeInt(2);
        writer.writeString(encodedPages.slice(0, 40)); writer.writeString(encodedPages.slice(40));

        const parser = new CatalogStudioSessionMessageParser();
        expect(parser.parse(new TestWrapper(new BinaryReader(writer.getBuffer())) as any)).toBe(true);
        expect(parser.draftVersionId).toBe(1);
        expect(parser.actors).toEqual([]);
        expect(parser.validationCurrent).toBe(true);
        expect(parser.publishedVersions).toEqual([]);
        expect(parser.pages).toEqual(pages);
        expect(parser.offers).toEqual([]);
    });

    it('parses history groups', () =>
    {
        const historyWriter = new BinaryWriter();
        historyWriter.writeInt(12); historyWriter.writeInt(7); historyWriter.writeInt(1); historyWriter.writeInt(1);
        historyWriter.writeInt(91); historyWriter.writeInt(7); historyWriter.writeInt(9); historyWriter.writeString('Alice');
        historyWriter.writeString('Move offer'); historyWriter.writeString('UI'); historyWriter.writeString('2026-08-02T10:05:30Z');
        historyWriter.writeInt(1); historyWriter.writeString('OFFER'); historyWriter.writeInt(77); historyWriter.writeString('MOVE');

        const history = new CatalogStudioHistoryMessageParser();
        expect(history.parse(new TestWrapper(new BinaryReader(historyWriter.getBuffer())) as any)).toBe(true);
        expect(history.groups[0].entries[0]).toEqual({ entityType: 'OFFER', entityId: 77, operation: 'MOVE' });
    });
});
