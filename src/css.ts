import type { Config } from 'stylelint';
import { htmlOverrides } from './overrides/customSyntax';
import { atRuleEmptyLineBefore } from './rules/at-rule-empty-line-before';
import { atRuleNoUnknown } from './rules/at-rule-no-unknown';
import { order, propertiesOrder } from './rules/order';

const config: Partial<Config> = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-hudochenkov/dollar-variables',
        'stylelint-config-hudochenkov/stylistic-issues',
        'stylelint-config-prettier',
    ],
    plugins: ['stylelint-order'],
    rules: {
        'at-rule-no-unknown': atRuleNoUnknown,
        'at-rule-empty-line-before': atRuleEmptyLineBefore,

        'order/properties-order': propertiesOrder,
        'order/order': order,
    },
    overrides: [htmlOverrides],
};

export = config;
