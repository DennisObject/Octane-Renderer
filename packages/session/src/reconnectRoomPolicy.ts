import { VoltEventType } from '@volt/events';

export interface SessionResumeMetadata
{
    sessionResumed: boolean;
    roomId: number;
}

export const shouldAttemptRoomReEntry = (
    eventType: string,
    resume: SessionResumeMetadata = { sessionResumed: false, roomId: 0 },
    lastRoomId: number = -1): boolean =>
    eventType === VoltEventType.SOCKET_REAUTHENTICATED &&
    !(resume.sessionResumed && resume.roomId > 0 && resume.roomId === lastRoomId);
