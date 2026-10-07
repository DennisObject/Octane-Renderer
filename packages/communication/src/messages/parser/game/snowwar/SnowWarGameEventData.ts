import { IMessageDataWrapper } from '@octane/api';

/**
 * AIR `SnowWarGameEventData` and subclasses (package_233). Fields not carried by
 * an event type stay 0.
 */
export class SnowWarGameEventData
{
    public static readonly HUMAN_LEFT_GAME = 1;
    public static readonly NEW_MOVE_TARGET = 2;
    public static readonly HUMAN_THROWS_SNOWBALL_AT_HUMAN = 3;
    public static readonly HUMAN_THROWS_SNOWBALL_AT_POSITION = 4;
    public static readonly HUMAN_STARTS_TO_MAKE_A_SNOWBALL = 7;
    public static readonly CREATE_SNOWBALL = 8;
    public static readonly MACHINE_CREATES_SNOWBALL = 11;
    public static readonly HUMAN_GETS_SNOWBALLS_FROM_MACHINE = 12;
    /** Plus extra (not in AIR): a ray gun fires 7 snowballs. */
    public static readonly RAY_GUN_BURST = 100;

    public humanGameObjectId = 0;
    public targetHumanGameObjectId = 0;
    public snowBallGameObjectId = 0;
    public snowBallMachineReference = 0;
    public x = 0;
    public y = 0;
    public trajectory = 0;
    public rayGunFuseObjectId = 0;

    private constructor(public readonly id: number)
    {
    }

    /** Unknown ids return null without reading, exactly like AIR. */
    public static create(id: number, wrapper: IMessageDataWrapper): SnowWarGameEventData
    {
        const event = new SnowWarGameEventData(id);

        switch(id)
        {
            case SnowWarGameEventData.HUMAN_LEFT_GAME:
            case SnowWarGameEventData.HUMAN_STARTS_TO_MAKE_A_SNOWBALL:
                event.humanGameObjectId = wrapper.readInt();
                return event;
            case SnowWarGameEventData.NEW_MOVE_TARGET:
                event.humanGameObjectId = wrapper.readInt();
                event.x = wrapper.readInt();
                event.y = wrapper.readInt();
                return event;
            case SnowWarGameEventData.HUMAN_THROWS_SNOWBALL_AT_HUMAN:
                event.humanGameObjectId = wrapper.readInt();
                event.targetHumanGameObjectId = wrapper.readInt();
                event.trajectory = wrapper.readInt();
                return event;
            case SnowWarGameEventData.HUMAN_THROWS_SNOWBALL_AT_POSITION:
                event.humanGameObjectId = wrapper.readInt();
                event.x = wrapper.readInt();
                event.y = wrapper.readInt();
                event.trajectory = wrapper.readInt();
                return event;
            case SnowWarGameEventData.CREATE_SNOWBALL:
                event.snowBallGameObjectId = wrapper.readInt();
                event.humanGameObjectId = wrapper.readInt();
                event.x = wrapper.readInt();
                event.y = wrapper.readInt();
                event.trajectory = wrapper.readInt();
                return event;
            case SnowWarGameEventData.MACHINE_CREATES_SNOWBALL:
                event.snowBallMachineReference = wrapper.readInt();
                return event;
            case SnowWarGameEventData.HUMAN_GETS_SNOWBALLS_FROM_MACHINE:
                event.humanGameObjectId = wrapper.readInt();
                event.snowBallMachineReference = wrapper.readInt();
                return event;
            case SnowWarGameEventData.RAY_GUN_BURST:
                event.humanGameObjectId = wrapper.readInt();
                event.rayGunFuseObjectId = wrapper.readInt();
                event.snowBallGameObjectId = wrapper.readInt();
                return event;
            default:
                return null;
        }
    }
}
