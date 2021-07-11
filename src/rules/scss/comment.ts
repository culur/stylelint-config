import { Configuration } from 'stylelint';

export const scssComment: Configuration['rules'] = {
    'scss/comment-no-empty': true,
    'scss/double-slash-comment-empty-line-before': [
        'always',
        {
            except: ['first-nested'],
            ignore: ['between-comments', 'stylelint-commands'],
        },
    ],
    'scss/double-slash-comment-whitespace-inside': 'always',
};
