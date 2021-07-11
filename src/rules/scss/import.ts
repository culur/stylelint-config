import { Configuration } from 'stylelint';

export const scssImport: Configuration['rules'] = {
    'scss/at-import-partial-extension': 'never',
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/partial-no-import': true,
};
