export { };

declare global
{
    interface Window
    {
        VoltConfig?: Record<string, unknown>;
    }
}
