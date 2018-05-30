module.exports = {
    'root': true,
    'extends': [
        './rules/possible-errors',
        './rules/best-practices',
        './rules/strict-mode',
        './rules/variables',
        './rules/nodejs-and-commonjs',
        './rules/stylistic-issues',
        './rules/ecmascript6',
    ].map(require.resolve),
    'parserOptions': {
        ecmaVersion: 2017,
        sourceType: 'module',
        ecmaFeatures: {},
    },
};
