export const atRuleEmptyLineBefore = [
    'always',
    {
        except: ['first-nested', 'blockless-after-blockless'],
        ignore: ['after-comment'],
        severity: 'warning',
    },
];
