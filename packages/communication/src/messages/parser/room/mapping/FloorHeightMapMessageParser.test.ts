import { BinaryReader, BinaryWriter } from '@volt/utils';
import { describe, expect, it } from 'vitest';
import { FloorHeightMapMessageParser } from './FloorHeightMapMessageParser';

const wrapper = (write: (writer: BinaryWriter) => void) =>
{
    const writer = new BinaryWriter();

    write(writer);

    const reader = new BinaryReader(writer.getBuffer());

    return {
        header: 0,
        readByte: () => reader.readByte(),
        readBytes: (length: number) => reader.readBytes(length),
        readBoolean: () => reader.readByte() === 1,
        readShort: () => reader.readShort(),
        readInt: () => reader.readInt(),
        readFloat: () => reader.readFloat(),
        readDouble: () => reader.readDouble(),
        readString: () =>
        {
            const length = reader.readShort();

            return length ? reader.readBytes(length).toString() : '';
        },
        get bytesAvailable()
        {
            return reader.remaining() > 0;
        }
    };
};

describe('FloorHeightMapMessageParser', () =>
{
    it('reads the September hides and camera tail', () =>
    {
        const parser = new FloorHeightMapMessageParser();

        parser.flush();

        expect(parser.parse(wrapper(writer =>
        {
            writer.writeByte(1);
            writer.writeInt(-1);
            writer.writeString('0x\r00');
            writer.writeInt(1);
            writer.writeInt(9);
            writer.writeByte(1);
            writer.writeInt(1);
            writer.writeInt(2);
            writer.writeInt(3);
            writer.writeInt(4);
            writer.writeByte(0);
            writer.writeInt(5);
            writer.writeInt(6);
            writer.writeInt(0x3FC00000);
        }))).toBe(true);
        expect(parser.scale).toBe(32);
        expect(parser.wallHeight).toBe(-1);
        expect(parser.getHeight(0, 0)).toBe(0);
        expect(parser.getHeight(1, 0)).toBe(FloorHeightMapMessageParser.TILE_BLOCKED);
        expect(parser.areaHides).toEqual([
            { furniId: 9, on: true, rootX: 1, rootY: 2, width: 3, length: 4, invert: false }
        ]);
        expect(parser.cameraX).toBe(5);
        expect(parser.cameraY).toBe(6);
        expect(parser.cameraZ).toBeCloseTo(1.5);
    });

    it('still accepts the short legacy body', () =>
    {
        const parser = new FloorHeightMapMessageParser();

        parser.flush();

        expect(parser.parse(wrapper(writer =>
        {
            writer.writeByte(0);
            writer.writeInt(4);
            writer.writeString('00');
        }))).toBe(true);
        expect(parser.scale).toBe(64);
        expect(parser.wallHeight).toBe(4);
        expect(parser.areaHides).toEqual([]);
        expect(parser.cameraX).toBe(0);
        expect(parser.cameraY).toBe(0);
        expect(parser.cameraZ).toBe(0);
    });

    it('drops the trailing empty row and keeps an internal hole row', () =>
    {
        const trailing = new FloorHeightMapMessageParser();

        trailing.flush();

        expect(trailing.parseModel('00\r00\r', -1)).toBe(true);
        expect(trailing.width).toBe(2);
        expect(trailing.height).toBe(2);
        expect(trailing.getHeight(0, 0)).toBe(0);
        expect(trailing.getHeight(1, 1)).toBe(0);

        const holes = new FloorHeightMapMessageParser();

        holes.flush();

        expect(holes.parseModel('00\rxx\r00\r', -1)).toBe(true);
        expect(holes.width).toBe(2);
        expect(holes.height).toBe(3);
        expect(holes.getHeight(0, 1)).toBe(FloorHeightMapMessageParser.TILE_BLOCKED);
        expect(holes.getHeight(1, 1)).toBe(FloorHeightMapMessageParser.TILE_BLOCKED);
        expect(holes.getHeight(0, 0)).toBe(0);
        expect(holes.getHeight(0, 2)).toBe(0);
    });
});