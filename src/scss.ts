import type { Config } from 'stylelint';
import { atRuleNoUnknown } from './rules/at-rule-no-unknown';

const config: Config = {
    extends: ['./css'],
    plugins: ['stylelint-scss'],
    rules: {
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': atRuleNoUnknown,
    },
};

export = config;
