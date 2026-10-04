export interface HousekeepingAccessRole
{
    id: number;
    slug: string;
    name: string;
    description: string;
    weight: number;
    securityLevel: number;
    badgeCode: string;
    isStaff: boolean;
    isHidden: boolean;
    memberCount: number;
    permissions: string[];
    limits: Record<string, number>;
}
export interface HousekeepingAccessPermission
{
    key: string;
    category: string;
    description: string;
    isOrphan: boolean;
    canGrant: boolean;
}
export interface HousekeepingAccessSnapshot
{
    revision: number;
    actorWeight: number;
    roles: HousekeepingAccessRole[];
    permissions: HousekeepingAccessPermission[];
    limits: Record<string, number>;
}
export interface HousekeepingAccessMember { id: number; username: string; expiresAt: number; }
export interface HousekeepingAccessMembers { roleId: number; offset: number; total: number; members: HousekeepingAccessMember[]; }
export interface HousekeepingAccessOverride { key: string; effect: string; reason: string; expiresAt: number; }
export interface HousekeepingAccessOverrides { userId: number; username: string; overrides: HousekeepingAccessOverride[]; }
export interface HousekeepingAccessAuditEntry { id: number; actorName: string; action: string; targetType: string; targetId: number; targetName: string; payload: string; createdAt: number; }
export interface HousekeepingAccessAudit { offset: number; total: number; entries: HousekeepingAccessAuditEntry[]; }
