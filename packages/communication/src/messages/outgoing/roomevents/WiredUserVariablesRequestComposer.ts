import { IMessageComposer } from '@octane/api';
export class WiredUserVariablesRequestComposer implements IMessageComposer<number[]>
{
    constructor(private exact = false) { }
    public getMessageArray(): number[] { return this.exact ? [1] : []; }
    public dispose(): void { }
}
