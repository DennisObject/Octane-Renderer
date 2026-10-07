/**
 * Receives the room mouse input of a client-run game room instead of the normal room handling
 * (AIR `RoomObjectEventHandler` with `roomEngine.isGameMode`, calling `roomEngine.gameEngine`).
 */
export interface IRoomGameInputHandler
{
    handleClickOnTile(tileX: number, tileY: number, altKey: boolean, shiftKey: boolean): void;
    handleClickOnHuman(objectId: number, altKey: boolean, shiftKey: boolean): void;
    handleMouseOverOnHuman(objectId: number, altKey: boolean, shiftKey: boolean): void;
    handleMouseOutOnHuman(objectId: number): void;
}
