import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { PetTrainingMessageParser } from './../../parser';

export class PetTrainingPanelMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, PetTrainingMessageParser);
    }

    public getParser(): PetTrainingMessageParser
    {
        return this.parser as PetTrainingMessageParser;
    }
}
