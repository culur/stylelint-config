import type { Configuration } from 'stylelint';
import { atRuleNoUnknown } from './rules/at-rule-no-unknown';
import { scssComment } from './rules/scss/comment';

const config: Partial<Configuration> = {
    extends: ['./css'],
    plugins: ['stylelint-scss'],
    rules: {
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': atRuleNoUnknown,
        ...scssComment,
    },
};

export = config;
