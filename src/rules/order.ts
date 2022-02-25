import config from 'stylelint-config-hudochenkov/order';
import { hasTailwindCSS } from '~/utils/resolve';

export const propertiesOrder = config.rules?.['order/properties-order'];
export const order = hasTailwindCSS
    ? [
          [
              'dollar-variables',
              'custom-properties',
              'at-rules',
              { type: 'at-rule', name: 'tailwind' },
              { type: 'at-rule', name: 'layer' },
              { type: 'at-rule', name: 'apply' },
              { type: 'at-rule', name: 'variants' },
              'declarations',
              { type: 'at-rule', name: 'responsive' },
              { type: 'at-rule', name: 'screen' },
              { type: 'at-rule', name: 'supports' },
              { type: 'at-rule', name: 'media' },
              'rules',
          ],
          { severity: 'warning' },
      ]
    : config.rules?.['order/order'];
