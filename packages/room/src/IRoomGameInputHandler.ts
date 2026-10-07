/**
 * Receives the room mouse input of a client-run game room instead of the normal room handling
 * (AIR `RoomObjectEventHandler` with `roomEngine.isGameMode`, calling `roomEngine.gameEngine`).
 */
export interface IRoomGameInputHandler
{
    handleClickOnTile(tileX: number, tileY: number, altKey: boolean, shiftKey: boolean): void;
    handleClickOnHuman(objectId: number, altKey: boolean, shiftKey: boolean): void;
    /** A click on floor furni; returns true when the game used it, otherwise the click falls through to the tile. */
    handleClickOnFurniture?(objectId: number, altKey: boolean, shiftKey: boolean): boolean;
    handleMouseOverOnHuman(objectId: number, altKey: boolean, shiftKey: boolean): void;
    handleMouseOutOnHuman(objectId: number): void;
}
