import type { Configuration } from 'stylelint';
import { atRuleEmptyLineBefore } from './rules/at-rule-empty-line-before';
import { atRuleNoUnknown } from './rules/at-rule-no-unknown';
import { order, propertiesOrder } from './rules/order';

const config: Partial<Configuration> = {
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
};

export = config;
