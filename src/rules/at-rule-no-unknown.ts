import { hasTailwindCSS } from '~/utils/resolve';

// https://tailwindcss.com/docs/functions-and-directives
const directives = [
    'tailwind',
    'layer',

    'apply',
    'variants',

    'responsive',
    'screen',
];

export const atRuleNoUnknown = [
    true,
    { ignoreAtRules: hasTailwindCSS ? directives : [] },
];
