import { IVoltEvent } from './IVoltEvent';

export interface IEventDispatcher
{
    dispose(): void;
    addEventListener<T extends IVoltEvent>(type: string, callback: (event: T) => void): void;
    removeEventListener(type: string, callback: Function): void;
    removeAllListeners(): void;
    dispatchEvent<T extends IVoltEvent>(event: T): boolean;
    subscribe<T extends IVoltEvent>(type: string | string[], callback: (event: T) => void): () => void;
}
