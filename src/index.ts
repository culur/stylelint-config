import type { Config } from 'stylelint';
import { hasSass, hasVue } from './utils/resolve';

const config: Config = {
    extends: [
        'stylelint-config-html',
        './css',
        ...(hasSass ? ['./scss'] : []),
        ...(hasVue ? ['./vue'] : []),
    ],
};

export = config;
