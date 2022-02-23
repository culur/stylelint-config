import { hasTailwindCSS } from '~/utils/resolve';

// https://tailwindcss.com/docs/functions-and-directives
const directives = [
    'tailwind',
    'layer',
    'apply',

    // https://v2.tailwindcss.com/docs/functions-and-directives
    // backwards compatible for v2
    'variants',
    'responsive',
    'screen',
];

export const atRuleNoUnknown = [
    true,
    { ignoreAtRules: hasTailwindCSS ? directives : [] },
];
