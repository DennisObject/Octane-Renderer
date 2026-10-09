import { BinaryReader, BinaryWriter } from '@octane/utils';
import { describe, expect, it } from 'vitest';
import { OctaneMessages } from '../../../../OctaneMessages';
import { IncomingHeader } from '../../../incoming/IncomingHeader';
import { CustomFilterResultEvent, ModifyCustomFilterResultEvent } from '../../../incoming/user/wordfilter';
import { OutgoingHeader } from '../../../outgoing/OutgoingHeader';
import { AddCustomFilterWordMessageComposer, GetCustomFilterMessageComposer, RemoveCustomFilterWordMessageComposer } from '../../../outgoing/user/wordfilter';
import { CustomFilterResultParser } from './CustomFilterResultParser';
import { ModifyCustomFilterResultParser } from './ModifyCustomFilterResultParser';

class TestWrapper
{
    constructor(private reader: BinaryReader)
    {}
    readInt()
    {
        return this.reader.readInt();
    }
    readString()
    {
        const length = this.reader.readShort(); return this.reader.readBytes(length).toString();
    }
    get bytesAvailable()
    {
        return this.reader.remaining() > 0;
    }
}

/** September 16 AIR class_2036: composers 2078 / 2171 / 3651, events 2338 / 1585. */
describe('personal word filter packet contract', () =>
{
    it('uses the official headers and registers every request and response', () =>
    {
        const messages = new OctaneMessages();

        expect(OutgoingHeader.GET_CUSTOM_FILTER).toBe(2078);
        expect(OutgoingHeader.ADD_CUSTOM_FILTER_WORD).toBe(2171);
        expect(OutgoingHeader.REMOVE_CUSTOM_FILTER_WORD).toBe(3651);
        expect(IncomingHeader.CUSTOM_FILTER_RESULT).toBe(2338);
        expect(IncomingHeader.MODIFY_CUSTOM_FILTER_RESULT).toBe(1585);

        expect(messages.composers.get(2078)).toBe(GetCustomFilterMessageComposer);
        expect(messages.composers.get(2171)).toBe(AddCustomFilterWordMessageComposer);
        expect(messages.composers.get(3651)).toBe(RemoveCustomFilterWordMessageComposer);
        expect(messages.events.get(2338)).toBe(CustomFilterResultEvent);
        expect(messages.events.get(1585)).toBe(ModifyCustomFilterResultEvent);
    });

    it('serializes the request bodies as the official composers do', () =>
    {
        expect(new GetCustomFilterMessageComposer().getMessageArray()).toEqual([]);
        expect(new AddCustomFilterWordMessageComposer('pippo').getMessageArray()).toEqual([ 'pippo' ]);
        expect(new RemoveCustomFilterWordMessageComposer('pippo').getMessageArray()).toEqual([ 'pippo' ]);
    });

    it('parses the word list as a counted string block', () =>
    {
        const writer = new BinaryWriter();
        writer.writeInt(2); writer.writeString('pippo'); writer.writeString('pluto');

        const parser = new CustomFilterResultParser();
        expect(parser.flush()).toBe(true);
        expect(parser.parse(new TestWrapper(new BinaryReader(writer.getBuffer())) as any)).toBe(true);
        expect(parser.words).toEqual([ 'pippo', 'pluto' ]);
    });

    it('parses the modify result as result code then word', () =>
    {
        const writer = new BinaryWriter();
        writer.writeInt(ModifyCustomFilterResultEvent.REMOVED); writer.writeString('pippo');

        const parser = new ModifyCustomFilterResultParser();
        expect(parser.flush()).toBe(true);
        expect(parser.parse(new TestWrapper(new BinaryReader(writer.getBuffer())) as any)).toBe(true);
        expect(parser.result).toBe(3);
        expect(parser.word).toBe('pippo');
        expect(ModifyCustomFilterResultEvent.ADDED).toBe(1);
    });
});
