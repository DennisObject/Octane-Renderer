import { IMessageDataWrapper, IMessageParser } from '@octane/api';
import { IWiredTradeNode, readWiredTradeNode } from './WiredTradeRuleParser';

/** Explicit Octane receipt adapter: contents, reward text, and automatic-open flag. */
export class WiredChestRewardMessageParser implements IMessageParser
{
    public nodes: IWiredTradeNode[] = [];
    public text = '';
    public openByDefault = false;
    public flush(): boolean { this.nodes = []; this.text = ''; this.openByDefault = false; return true; }
    public parse(wrapper: IMessageDataWrapper): boolean
    {
        const count = wrapper.readInt();
        if(count < 0 || count > 500) return false;
        this.nodes = [];
        for(let i = 0; i < count; i++) this.nodes.push(readWiredTradeNode(wrapper));
        this.text = wrapper.readString();
        this.openByDefault = wrapper.readBoolean();
        return true;
    }
}
