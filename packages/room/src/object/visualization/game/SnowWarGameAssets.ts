import { Texture } from 'pixi.js';

// HabboRoomObjectVisualizationLib bitmaps used by the AIR SnowWar visualizations.
const SOURCES: Record<string, string> = {
    snowball_small_png: 'iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAANElEQVR42mNggAKj6Lj/MMyADEACMDD50DGEAmQJDAUEJUEcGDhz5gym0SABGMbqKHTXAgDXiGqkjQmDEwAAAABJRU5ErkJggg==',
    snowball_small_shadow_png: 'iVBORw0KGgoAAAANSUhEUgAAAAcAAAADCAYAAABfwxXFAAAAE0lEQVR42mNggID/WDBOCYIKGADHqxDwl8KUuQAAAABJRU5ErkJggg==',
    snowball_splash_1: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAANCAYAAACgu+4kAAAAbUlEQVR42mNgIBUkTPwPxxgSuBQj8ZEBQg4qgUsxXBybGC4DjKLjsBqA3floXkDWjN1GPABZM4YrcNqOwwBcAK8hIAMmHzqG1RW4DUBzGswQECZsAI6oAWmEYeQwIMoFeBMNsbGBP+GQk/ZxAAB0IyzeO6oCewAAAABJRU5ErkJggg==',
    snowball_splash_2: 'iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAAWUlEQVR42mNgwAcSJv5nIAqAFGJTDBQDAeIMwqWYJENwuYZkQ0gJE5iFZBsOdR0MkGcQmiHkGUQVl1AlTMhKcOT4E6dBBC0gZAhRiY5IQ4gyCK8CmmYBKAAAzMC04doj+Y8AAAAASUVORK5CYII=',
    snowball_splash_3: 'iVBORw0KGgoAAAANSUhEUgAAABcAAAAWCAYAAAArdgcFAAAAQklEQVR42mNgIAUkTPzPQBMANBgEaGoBnTQNXe+OAlKDmCbBDE0ctEsgNHP5KBgFdC64iFZPapFLchFNissHS/kPAPMVSmV59UY9AAAAAElFTkSuQmCC'
};

const textures = new Map<string, Texture>();

let loading = false;

const load = (): void =>
{
    if(loading) return;

    loading = true;

    for(const [ name, data ] of Object.entries(SOURCES))
    {
        const image = new Image();

        image.onload = () =>
        {
            const texture = Texture.from(image, true);

            texture.source.scaleMode = 'nearest';

            textures.set(name, texture);
        };

        image.src = `data:image/png;base64,${ data }`;
    }
};

/** Null until the embedded bitmap has decoded (one frame after first use). */
export const GetSnowWarGameTexture = (name: string): Texture =>
{
    load();

    return textures.get(name) ?? null;
};
