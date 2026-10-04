export interface ICreatableRoomModel
{
    readonly name: string;
    readonly tileSize: number;
    readonly width: number;
    readonly height: number;
    readonly clubLevel: number;
}

export interface IClientAccessListsSnapshot
{
    readonly chatStyleIds: ReadonlyArray<number>;
    readonly roomModels: ReadonlyArray<ICreatableRoomModel>;
}
