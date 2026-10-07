import { IMessageDataWrapper, IMessageParser } from '@octane/api';

/** AIR GameChat. */
export class Game2GameChatMessageParser implements IMessageParser
{
    private _userId: number;
    private _chatMessage: string;

    public flush(): boolean
    {
        this._userId = 0;
        this._chatMessage = '';

        return true;
    }

    public parse(wrapper: IMessageDataWrapper): boolean
    {
        if(!wrapper) return false;

        this._userId = wrapper.readInt();
        this._chatMessage = wrapper.readString();

        return true;
    }

    public get userId(): number
    {
        return this._userId;
    }

    public get chatMessage(): string
    {
        return this._chatMessage;
    }
}
