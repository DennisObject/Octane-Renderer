import { IMessageDataWrapper } from '@volt/api';

/**
 * AIR `SnowWarGameObjectData` and subclasses: `variables` holds every checksum
 * variable including type (0) and id (1); humans carry four trailing strings.
 */
export class SnowWarGameObjectData
{
    public static readonly TYPE_SNOWBALL = 1;
    public static readonly TYPE_TREE = 2;
    public static readonly TYPE_PILE = 3;
    public static readonly TYPE_MACHINE = 4;
    public static readonly TYPE_HUMAN = 5;

    private static readonly VARIABLE_COUNTS: Record<number, number> = { 1: 11, 2: 9, 3: 7, 4: 8, 5: 19 };

    public readonly variables: number[];
    public readonly name: string = '';
    public readonly mission: string = '';
    public readonly figure: string = '';
    public readonly sex: string = '';

    constructor(type: number, id: number, wrapper: IMessageDataWrapper)
    {
        const count = SnowWarGameObjectData.VARIABLE_COUNTS[type];

        if(count === undefined) throw new Error(`Unknown SnowWar game object type ${ type }`);

        this.variables = [ type, id ];

        for(let i = 2; i < count; i++) this.variables.push(wrapper.readInt());

        if(type !== SnowWarGameObjectData.TYPE_HUMAN) return;

        this.name = wrapper.readString();
        this.mission = wrapper.readString();
        this.figure = wrapper.readString();
        this.sex = wrapper.readString();
    }

    public get type(): number
    {
        return this.variables[0];
    }

    public get id(): number
    {
        return this.variables[1];
    }

    public getVariable(index: number): number
    {
        return this.variables[index];
    }
}
