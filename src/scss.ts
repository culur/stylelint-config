import type { Config } from 'stylelint';
import { atRuleNoUnknown } from './rules/at-rule-no-unknown';
import { scssImport } from './rules/scss/import';

const config: Config = {
    extends: ['./css'],
    plugins: ['stylelint-scss'],
    rules: {
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': atRuleNoUnknown,
        ...scssImport,
    },
};

export = config;
