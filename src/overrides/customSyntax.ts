import type { ConfigOverride } from 'stylelint';

export const htmlOverrides: ConfigOverride = {
    files: ['**/*.{html,html,xml,svelte,vue}'],
    customSyntax: 'postcss-html',
};

export const scssOverrides: ConfigOverride = {
    files: ['**/*.scss'],
    customSyntax: 'postcss-sass',
};
