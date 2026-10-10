import { IGraphicAsset } from '@volt/api';

export interface ParticleSystemParticle
{
    isEmitter?: boolean;
    lifeTime?: number;
    fade?: boolean;
    frames?: IGraphicAsset[];
}
