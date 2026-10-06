export interface IMessageConfiguration
{
    events: Map<number, Function>;
    eventAliases?: ReadonlyMap<number, number>;
    composers: Map<number, Function>;
}