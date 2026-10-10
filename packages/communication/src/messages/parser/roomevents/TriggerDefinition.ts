import { IMessageDataWrapper } from '@octane/api';
import { Triggerable } from './Triggerable';

export class TriggerDefinition extends Triggerable
{
    constructor(wrapper: IMessageDataWrapper)
    {
        super(wrapper);
        this.readFooter(wrapper);
    }
}
