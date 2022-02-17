import type { Config } from 'stylelint';
import { atRuleNoUnknown } from './rules/at-rule-no-unknown';
import { scssComment } from './rules/scss/comment';
import { scssImport } from './rules/scss/import';

const config: Partial<Config> = {
    extends: ['./css'],
    plugins: ['stylelint-scss'],
    rules: {
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': atRuleNoUnknown,
        ...scssComment,
        ...scssImport,
    },
};

export = config;
