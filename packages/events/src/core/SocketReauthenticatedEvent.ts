import { VoltEvent } from './VoltEvent';

export class SocketReauthenticatedEvent extends VoltEvent
{
    constructor(type: string, public readonly sessionResumed: boolean, public readonly roomId: number)
    {
        super(type);
    }
}
