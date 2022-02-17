import type { Config } from 'stylelint';

export const scssImport: Config['rules'] = {
    'scss/at-import-partial-extension': 'never',
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/partial-no-import': true,
};
