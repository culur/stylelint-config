import type { Configuration } from 'stylelint';
import { atRuleNoUnknown } from './rules/at-rule-no-unknown';

const config: Partial<Configuration> = {
    extends: ['./css'],
    plugins: ['stylelint-scss'],
    rules: {
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': atRuleNoUnknown,
    },
};

export = config;
