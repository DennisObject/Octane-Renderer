export interface PacketWireProfile
{
    readonly name: string;
    readonly outgoing: Readonly<Record<number, number>>;
    readonly incoming: Readonly<Record<number, number>>;
}

function copyHeaders(value: unknown, direction: string): Readonly<Record<number, number>>
{
    if(!value || (typeof value !== 'object') || Array.isArray(value))
    {
        throw new Error(`Invalid packet profile ${ direction } map`);
    }

    const headers: Record<number, number> = Object.create(null);
    const targets = new Set<number>();

    for(const [key, target] of Object.entries(value))
    {
        const header = Number(key);

        if(!Number.isInteger(header) || (header < 0) || (header > 65535) || (String(header) !== key)
            || (typeof target !== 'number') || !Number.isInteger(target) || (target < 0) || (target > 65535))
        {
            throw new Error(`Invalid packet profile ${ direction } header: ${ key }`);
        }

        if(targets.has(target)) throw new Error(`Duplicate packet profile ${ direction } target: ${ target }`);

        targets.add(target);
        headers[header] = target;
    }

    return Object.freeze(headers);
}

export function createPacketWireProfile(value: unknown): Readonly<PacketWireProfile> | null
{
    if((value === null) || (value === undefined)) return null;

    if((typeof value !== 'object') || Array.isArray(value)) throw new Error('Invalid packet profile');

    const profile = value as { name?: unknown; outgoing?: unknown; incoming?: unknown };

    if((typeof profile.name !== 'string') || !profile.name.trim().length) throw new Error('Invalid packet profile name');

    const outgoing = copyHeaders(profile.outgoing, 'outgoing');
    const incoming = copyHeaders(profile.incoming, 'incoming');

    // The revision announcement must reach the server before it selects a profile.
    if(outgoing[4000] !== 4000) throw new Error('Packet profile must preserve ClientHello header 4000');

    return Object.freeze({ name: profile.name, outgoing, incoming });
}
