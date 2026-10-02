# Shared avatar frame rendering

`AvatarImage.processAsTexture` used a private output texture for every avatar, even
when their resolved body-part compositions were identical. Body-part caches reuse
containers, but animation updates still caused an offscreen render for each avatar.

The render manager now owns a cache of immutable output textures. Its identity is
the resolved ordered Container/Sprite tree: nested local transforms, texture/source
identity and source revision, UVs and trim, tint, alpha, blend, anchor, sampling
style, visibility, and canvas dimensions. Action start frames, head/body directions,
figure colors and overridden animation layers are resolved before this identity
is calculated. Canvas offsets, animation clocks and additional effect sprites
remain individual avatar state.

Filters, masks, custom drawables, mutable/unknown sources and transient body parts
use the private output path. Static HTML images/ImageBitmaps and Pixi's EMPTY/WHITE
textures are eligible. Pixi 8.21's `TextureSource.update()` emits `update` without
a public revision counter; weak source revision records track update, resize,
styleChange and change events. Sampling fields are included because setting
`scaleMode` alone does not emit a style-change event in this version.

The cache retains at most 2,048 outputs and 96 MiB of RGBA pixel storage, counting
actual source pixel dimensions. The bundled large standing/sitting canvas is
90×130, and the bundled Move animation has four frames. Retaining those four
frames for 500 distinct compositions takes 89.26 MiB, versus 22.32 MiB for 500
private outputs. GPU driver/framebuffer overhead and the existing texture pool
are additional memory. Longer animations, more directions or larger canvases can
exhaust the budget and cause private rendering or cache churn. AvatarImages retained
for other scales/effects also retain their active-frame borrow.

An AvatarImage borrows only its active shared output. Eviction recycles only
unborrowed frames; a cache full of borrowed frames falls back to private rendering.
Manager disposal stops acquisition and defers recycling borrowed frames until the
last avatar releases them. Avatar disposal is idempotent. Cache hits keep an
already computed hit map; misses and private redraws mark it dirty. Recycling
through the existing TexturePool clears it.
Renderer replacement and Pixi's contextChange runner invalidate outputs, since a
restored WebGL context has lost their GPU pixels. Borrowed invalidated outputs
are recycled after their last release, and the next texture request redraws them.

## Reproduce the synthetic measurement

```sh
node_modules/.bin/vitest run packages/avatar/src/cache/AvatarFrameTextureCache.test.ts --reporter=verbose -t 'counts offscreen passes'
```

This executes real AvatarImage/body-part caches and Pixi containers with synthetic
three-part static assets. The renderer is a counted stub, so these are offscreen
pass/output allocation measurements, not GPU timings or a game FPS measurement.
The baseline disables the shared cache and uses the private output path. Each
workload advances 500 avatars through 12 updates of a four-frame walking loop at
the actual bundled 90×130 canvas size. Distinct avatars use 500 different tints.

| Workload | Private passes / outputs | Cold cache passes / outputs | Warm cache passes / outputs | Retained pixel storage |
| --- | --- | --- | --- | --- |
| 500 identical compositions | 6,000 / 500 | 4 / 4 | 0 / 0 | 0.18 MiB |
| 500 distinct compositions | 6,000 / 500 | 2,000 / 2,000 | 0 / 0 | 89.26 MiB |

The command also prints CPU time spent in the synthetic update loop. Key creation
adds CPU work, and cold distinct workloads allocate more outputs. These noisy
single-process samples do not establish a CPU speedup; real GPU and room rendering
must be profiled before claiming smooth rendering at 500 avatars.

One isolated run printed private/cold/warm CPU times of 245/422/408 ms for identical
compositions and 173/411/224 ms for distinct compositions. The stub omits the GPU
cost being removed, so those numbers expose added CPU work rather than measure
the overall performance improvement.

## Checks and remaining runtime verification

The focused suite checks composition/state isolation, source updates, hit maps,
entry/byte limits, borrowed-frame protection, manager/avatar disposal ordering,
effect transitions, transient cleanup and private fallback. Typecheck, scoped lint,
and a build resolving workspace packages to this worktree passed. The broader
avatar/room/utils/assets run passed 325 tests with one unrelated water-mask test
timing out during a concurrent build; all three water-area tests passed in an
isolated rerun.

With node_modules shared from another worktree, build with local workspace aliases
so dependency symlinks cannot silently select the other checkout:

```sh
node --input-type=module <<'JS'
import { build } from 'vite';
import { resolve } from 'node:path';
const names = ['api', 'assets', 'avatar', 'camera', 'communication', 'configuration', 'events', 'localization', 'room', 'session', 'sound', 'utils'];
await build({ resolve: { alias: Object.fromEntries(names.map(name => ['@octane/' + name, resolve('packages', name, 'index.ts')])) } });
JS
```

Manual game verification remains: run the existing 500-walking-avatar scenario,
check clothing/tints, head/body turns, sitting/laying, effects and alpha hit testing,
then leave/re-enter the room. No live browser probe or deployment was performed.
