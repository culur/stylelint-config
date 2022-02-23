import type { Config } from 'stylelint';
import { atRuleNoUnknown } from './rules/at-rule-no-unknown';
import { order, propertiesOrder } from './rules/order';

const config: Config = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-hudochenkov/dollar-variables',
        'stylelint-config-hudochenkov/stylistic-issues',
        'stylelint-config-prettier',
    ],
    plugins: ['stylelint-order'],
    rules: {
        'at-rule-no-unknown': atRuleNoUnknown,

        'order/properties-order': propertiesOrder,
        'order/order': order,
    },
};

export = config;
