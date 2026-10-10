import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export const aliases = {
    '@volt/api': resolve(__dirname, 'packages/api/src'),
    '@volt/assets': resolve(__dirname, 'packages/assets/src'),
    '@volt/avatar': resolve(__dirname, 'packages/avatar/src'),
    '@volt/camera': resolve(__dirname, 'packages/camera/src'),
    '@volt/communication': resolve(__dirname, 'packages/communication/src'),
    '@volt/configuration': resolve(__dirname, 'packages/configuration/src'),
    '@volt/events': resolve(__dirname, 'packages/events/src'),
    '@volt/localization': resolve(__dirname, 'packages/localization/src'),
    '@volt/room': resolve(__dirname, 'packages/room/src'),
    '@volt/session': resolve(__dirname, 'packages/session/src'),
    '@volt/sound': resolve(__dirname, 'packages/sound/src'),
    '@volt/utils': resolve(__dirname, 'packages/utils/src')
};

export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',
        include: ['packages/**/*.{test,spec}.{js,ts}'],
        exclude: ['**/node_modules/**', '**/dist/**', '**/*.e2e.test.ts'],
        coverage: {
            provider: 'v8',
            reporter: ['text', 'json', 'html'],
            include: ['packages/*/src/**/*.ts'],
            exclude: [
                '**/node_modules/**',
                '**/dist/**',
                '**/*.d.ts',
                '**/index.ts',
                '**/*.test.ts',
                '**/*.spec.ts'
            ]
        },
        alias: aliases
    },
    resolve: {
        alias: aliases
    }
});
