import { IEventDispatcher, IVoltEvent } from '../../../common';
import { IRoomObjectEventHandler } from './IRoomObjectEventHandler';

export interface IRoomObjectLogicFactory
{
    getLogic(type: string): IRoomObjectEventHandler;
    registerEventFunction(func: (event: IVoltEvent) => void): void;
    removeEventFunction(func: (event: IVoltEvent) => void): void;
    events: IEventDispatcher;
}
