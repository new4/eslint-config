module.exports = {
    rules: {
        // 强制 getter 和 setter 在对象中成对出现
        'accessor-pairs': 'off',

        // 强制数组方法的回调函数中有 return 语句
        'array-callback-return': ['error', { allowImplicit: true }],

        // 强制把变量的使用限制在其定义的作用域范围内
        'block-scoped-var': 'error',

        // 强制类方法使用 this
        'class-methods-use-this': ['error', {
            exceptMethods: [],
        }],

        // 指定程序中允许的最大环路复杂度
        'complexity': ['off', 11],

        // 要求 return 语句要么总是指定返回的值，要么不指定
        'consistent-return': 'error',

        // 强制所有控制语句使用一致的括号风格
        'curly': ['error', 'all'],

        // 要求 switch 语句中有 default 分支
        'default-case': ['error', { commentPattern: '^no default$' }],

        // 强制在点号之前和之后一致的换行
        'dot-location': ['error', 'property'],

        // 强制尽可能地使用点号
        'dot-notation': ['error', { allowKeywords: true }],

        // 要求使用 === 和 !==
        'eqeqeq': ['error', 'always', { 'null': 'ignore' }],

        // 要求 for-in 循环中有一个 if 语句
        'guard-for-in': 'error',

        // 禁用 alert、confirm 和 prompt
        'no-alert': 'warn',

        // 禁用 arguments.caller 或 arguments.callee
        'no-caller': 'error',

        // 不允许在 case 子句中使用词法声明
        'no-case-declarations': 'error',

        // 禁止除法操作符显式的出现在正则表达式开始的位置
        'no-div-regex': 'off',

        // 禁止 if 语句中 return 语句之后有 else 块
        'no-else-return': ['error', { allowElseIf: false }],

        // 禁止出现空函数
        'no-empty-function': ['error', {
            allow: [
                'arrowFunctions',
                'functions',
                'methods',
            ],
        }],

        // 禁止使用空解构模式
        'no-empty-pattern': 'error',

        // 禁止在没有类型检查操作符的情况下与 null 进行比较
        'no-eq-null': 'off',

        // 禁用 eval()
        'no-eval': 'error',

        // 禁止扩展原生类型
        'no-extend-native': 'error',

        // 禁止不必要的 .bind() 调用
        'no-extra-bind': 'error',

        // 禁用不必要的标签
        'no-extra-label': 'error',

        // 禁止 case 语句落空
        'no-fallthrough': 'error',

        // 禁止数字字面量中使用前导和末尾小数点
        'no-floating-decimal': 'error',

        // 禁止对原生对象或只读的全局对象进行赋值
        'no-global-assign': ['error', { exceptions: [] }],

        // 禁止使用短符号进行类型转换
        'no-implicit-coercion': ['off', {
            'boolean': false,
            'number': true,
            'string': true,
            'allow': [],
        }],

        // 禁止在全局范围内使用变量声明和 function 声明
        'no-implicit-globals': 'off',

        // 禁止使用类似 eval() 的方法
        'no-implied-eval': 'error',

        // 禁止 this 关键字出现在类和类对象之外
        'no-invalid-this': 'off',

        // 禁用 __iterator__ 属性
        'no-iterator': 'error',

        // 禁用标签语句
        'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

        // 禁用不必要的嵌套块
        'no-lone-blocks': 'error',

        // 禁止在循环中出现 function 声明和表达式
        'no-loop-func': 'error',

        // 禁用魔术数字
        'no-magic-numbers': ['off', {
            ignore: [],
            ignoreArrayIndexes: true,
            enforceConst: true,
            detectObjects: false,
        }],

        // 禁止使用多个空格
        'no-multi-spaces': ['error', {
            ignoreEOLComments: false,
        }],

        // 禁止使用多行字符串
        'no-multi-str': 'error',

        // 禁止使用 new 以避免产生副作用
        'no-new': 'error',

        // 禁止对 Function 对象使用 new 操作符
        'no-new-func': 'error',

        // 禁止对 String，Number 和 Boolean 使用 new 操作符
        'no-new-wrappers': 'error',

        // 禁用八进制字面量
        'no-octal': 'error',

        // 禁止在字符串中使用八进制转义序列
        'no-octal-escape': 'error',

        // 禁止对 function 的参数进行重新赋值
        'no-param-reassign': ['error', {
            props: true,
            ignorePropertyModificationsFor: [
                'acc', // for reduce accumulators
                'accumulator', // for reduce accumulators
                'e', // for e.returnvalue
                'ctx', // for Koa routing
                'req', // for Express requests
                'request', // for Express requests
                'res', // for Express responses
                'response', // for Express responses
                '$scope', // for Angular 1 scopes
            ],
        }],

        // 禁用 __proto__ 属性
        'no-proto': 'error',

        // 禁止多次声明同一变量
        'no-redeclare': 'error',

        // 禁止使用对象的某些属性
        'no-restricted-properties': ['error',
            {
                object: 'arguments',
                property: 'callee',
                message: 'arguments.callee is deprecated',
            }, {
                object: 'global',
                property: 'isFinite',
                message: 'Please use Number.isFinite instead',
            }, {
                object: 'self',
                property: 'isFinite',
                message: 'Please use Number.isFinite instead',
            }, {
                object: 'window',
                property: 'isFinite',
                message: 'Please use Number.isFinite instead',
            }, {
                object: 'global',
                property: 'isNaN',
                message: 'Please use Number.isNaN instead',
            }, {
                object: 'self',
                property: 'isNaN',
                message: 'Please use Number.isNaN instead',
            }, {
                object: 'window',
                property: 'isNaN',
                message: 'Please use Number.isNaN instead',
            }, {
                property: '__defineGetter__',
                message: 'Please use Object.defineProperty instead.',
            }, {
                property: '__defineSetter__',
                message: 'Please use Object.defineProperty instead.',
            }, {
                object: 'Math',
                property: 'pow',
                message: 'Use the exponentiation operator (**) instead.',
            },
        ],

        // 禁止在 return 语句中使用赋值语句
        'no-return-assign': ['error', 'except-parens'],

        // 禁用不必要的 return await
        'no-return-await': 'error',

        // 禁止使用 javascript: url
        'no-script-url': 'error',

        // 禁止自我赋值
        'no-self-assign': 'error',

        // 禁止自身比较
        'no-self-compare': 'error',

        // 禁用逗号操作符
        'no-sequences': 'error',

        // 禁止抛出异常字面量
        'no-throw-literal': 'error',

        // 禁用一成不变的循环条件
        'no-unmodified-loop-condition': 'off',

        // 禁止出现未使用过的表达式
        'no-unused-expressions': ['error', {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: false,
        }],

        // 禁用出现未使用过的标签
        'no-unused-labels': 'error',

        // 禁止不必要的 .call() 和 .apply()
        'no-useless-call': 'off',

        // 禁止不必要的字符串字面量或模板字面量的连接
        'no-useless-concat': 'error',

        // 禁用不必要的转义字符
        'no-useless-escape': 'error',

        // 禁止多余的 return 语句
        'no-useless-return': 'error',

        // 禁用 void 操作符
        'no-void': 'error',

        // 禁止在注释中使用特定的警告术语
        'no-warning-comments': ['warn', { terms: ['todo', 'fixme', 'xxx'], location: 'start' }],

        // 禁用 with 语句
        'no-with': 'error',

        // 要求使用 Error 对象作为 Promise 拒绝的原因
        'prefer-promise-reject-errors': ['warn', { allowEmptyReject: true }],

        // 强制在 parseInt() 使用基数参数
        'radix': 'error',

        // 禁止使用不带 await 表达式的 async 函数
        'require-await': 'warn',

        // 要求所有的 var 声明出现在它们所在的作用域顶部
        'vars-on-top': 'error',

        // 要求 IIFE 使用括号括起来
        'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],

        // 要求或禁止 “Yoda” 条件
        'yoda': 'error',
    },
};
