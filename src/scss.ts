import type { Config } from 'stylelint';
import configRecommendedSCSS from 'stylelint-config-recommended-scss';
import configStandardSCSS from 'stylelint-config-standard-scss';
import { atRuleNoUnknown } from './rules/at-rule-no-unknown';

const config: Config = {
    plugins: ['stylelint-scss'],
    rules: {
        ...configRecommendedSCSS.rules,
        ...configStandardSCSS.rules,
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': atRuleNoUnknown,
    },
    overrides: [
        {
            files: ['*.scss', '**/*.scss'],
            customSyntax: 'postcss-scss',
        },
        {
            files: ['*.sass', '**/*.sass'],
            customSyntax: 'postcss-sass',
        },
    ],
};

export = config;
