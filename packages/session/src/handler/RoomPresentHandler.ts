import { IConnection, IRoomHandlerListener } from '@volt/api';
import { PresentOpenedMessageEvent } from '@volt/communication';
import { GetEventDispatcher, RoomSessionPresentEvent } from '@volt/events';
import { BaseHandler } from './BaseHandler';

export class RoomPresentHandler extends BaseHandler
{
    constructor(connection: IConnection, listener: IRoomHandlerListener)
    {
        super(connection, listener);

        if(!connection) return;

        connection.addMessageEvent(new PresentOpenedMessageEvent(this.onFurnitureGiftOpenedEvent.bind(this)));
    }

    private onFurnitureGiftOpenedEvent(event: PresentOpenedMessageEvent): void
    {
        if(!event) return;

        const parser = event.getParser();

        if(!parser) return;

        const session = this.listener.getSession(this.roomId);

        if(!session) return;

        GetEventDispatcher().dispatchEvent(new RoomSessionPresentEvent(RoomSessionPresentEvent.RSPE_PRESENT_OPENED, session, parser.classId, parser.itemType, parser.productCode, parser.placedItemId, parser.placedItemType, parser.placedInRoom, parser.petFigureString));

    }

}
