import { GetRoomEngine, RoomEngine } from '@volt/room';
export { };

declare global
{
	interface Window
	{
		VoltDevTools?:
		{
            roomEngine: RoomEngine;
		};
	}
}

window.VoltDevTools = {
    roomEngine: GetRoomEngine()
};
