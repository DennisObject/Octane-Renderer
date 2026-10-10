import { IMessageComposer } from '@volt/api';

export class MarkMessengerReadComposer implements IMessageComposer<[ number, number ]>
{
    constructor(private conversationId: number, private messageId: number)
    {}
    public getMessageArray(): [ number, number ]
    {
        return [ this.conversationId, this.messageId ];
    }
    public dispose(): void
    {
        return;
    }
}
