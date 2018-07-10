const restrictedGlobals = require('./_eslint-restricted-globals');

module.exports = {
  rules: {
    // 要求或禁止 var 声明中的初始化
    'init-declarations': 'off',

    // 禁止 catch 子句的参数与外层作用域中的变量同名
    'no-catch-shadow': 'off',

    // 禁止删除变量
    'no-delete-var': 'error',

    // 不允许标签与变量同名
    'no-label-var': 'error',

    // 禁用特定的全局变量
    'no-restricted-globals': ['error', 'isFinite', 'isNaN'].concat(restrictedGlobals),

    // 禁止变量声明与外层作用域的变量同名
    'no-shadow': 'error',

    // 禁止将标识符定义为受限的名字
    'no-shadow-restricted-names': 'error',

    // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    'no-undef': 'error',

    // 禁止将变量初始化为 undefined
    'no-undef-init': 'error',

    // 禁止将 undefined 作为标识符
    'no-undefined': 'off',

    // 禁止出现未使用过的变量
    'no-unused-vars': ['error', {
      vars: 'all',
      args: 'after-used',
      ignoreRestSiblings: true,
    }],

    // 禁止在变量定义之前使用它们
    'no-use-before-define': ['error', {
      functions: false,
      classes: true,
      variables: true,
    }],
  },
};
