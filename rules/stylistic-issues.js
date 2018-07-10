module.exports = {
    rules: {
        // 在数组开括号后和闭括号前强制换行
        'array-bracket-newline': ['off', 'consistent'],

        // 强制数组方括号中使用一致的空格
        'array-bracket-spacing': ['error', 'never'],

        // 强制数组元素间出现换行
        'array-element-newline': ['off', { multiline: true, minItems: 3 }],

        // 禁止或强制在代码块中开括号前和闭括号后有空格
        'block-spacing': ['error', 'always'],

        // 强制在代码块中使用一致的大括号风格
        'brace-style': ['error', '1tbs', { allowSingleLine: true }],

        // 强制使用骆驼拼写法命名约定
        'camelcase': ['error', { properties: 'never' }],

        // 强制或禁止对注释的第一个字母大写
        'capitalized-comments': ['off', 'never', {
            line: {
                ignorePattern: '.*',
                ignoreInlineComments: true,
                ignoreConsecutiveComments: true,
            },
            block: {
                ignorePattern: '.*',
                ignoreInlineComments: true,
                ignoreConsecutiveComments: true,
            },
        }],

        // 要求或禁止末尾逗号
        'comma-dangle': ['error', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'always-multiline',
        }],

        // 强制在逗号前后使用一致的空格
        'comma-spacing': ['error', { before: false, after: true }],

        // 强制使用一致的逗号风格
        'comma-style': ['error', 'last', {
            exceptions: {
                ArrayExpression: false,
                ArrayPattern: false,
                ArrowFunctionExpression: false,
                CallExpression: false,
                FunctionDeclaration: false,
                FunctionExpression: false,
                ImportDeclaration: false,
                ObjectExpression: false,
                ObjectPattern: false,
                VariableDeclaration: false,
                NewExpression: false,
            },
        }],

        // 强制在计算的属性的方括号中使用一致的空格
        'computed-property-spacing': ['error', 'never'],

        // 当获取当前执行环境的上下文时，强制使用一致的命名
        'consistent-this': 'off',

        // 要求或禁止文件末尾存在空行
        'eol-last': ['error', 'always'],

        // 要求或禁止在函数标识符和其调用之间有空格
        'func-call-spacing': ['error', 'never'],

        // 要求函数名与赋值给它们的变量名或属性名相匹配
        'func-name-matching': ['off', 'always', {
            includeCommonJSModuleExports: false,
        }],

        // 要求或禁止使用命名的 function 表达式
        'func-names': 'warn',

        // 强制一致地使用 function 声明或表达式
        'func-style': ['off', 'expression'],

        // 强制在函数括号内使用一致的换行
        'function-paren-newline': ['error', 'consistent'],

        // 禁用指定的标识符
        'id-blacklist': 'off',

        // 强制标识符的最小和最大长度
        'id-length': 'off',

        // 要求标识符匹配一个指定的正则表达式
        'id-match': 'off',

        // 强制隐式返回的箭头函数体的位置
        'implicit-arrow-linebreak': ['error', 'beside'],

        // 强制使用一致的缩进
        'indent': ['error', 2, { // 2个空格缩进
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1,
            MemberExpression: 1,
            FunctionDeclaration: {
                parameters: 1,
                body: 1,
            },
            FunctionExpression: {
                parameters: 1,
                body: 1,
            },
            CallExpression: {
                arguments: 1,
            },
            ArrayExpression: 1,
            ObjectExpression: 1,
            ImportDeclaration: 1,
            flatTernaryExpressions: false,
            // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
            ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
            ignoreComments: false,
        }],

        // 强制在 JSX 属性中一致地使用双引号或单引号
        'jsx-quotes': ['off', 'prefer-double'],

        // 强制在对象字面量的属性中键和值之间使用一致的间距
        'key-spacing': ['error', { beforeColon: false, afterColon: true }],

        // 强制在关键字前后使用一致的空格
        'keyword-spacing': ['error', {
            before: true,
            after: true,
            overrides: {
                'return': { after: true },
                'throw': { after: true },
                'case': { after: true },
            },
        }],

        // 强制行注释的位置
        'line-comment-position': ['off', {
            position: 'above',
            ignorePattern: '',
            applyDefaultPatterns: true,
        }],

        // 强制使用一致的换行风格
        'linebreak-style': ['error', 'unix'],

        // 要求在注释周围有空行
        'lines-around-comment': 'off',

        // 要求或禁止类成员之间出现空行
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: false }],

        // 强制可嵌套的块的最大深度
        'max-depth': ['off', 4],

        // 强制一行的最大长度
        'max-len': ['error', 120, 2, {
            ignoreUrls: true,
            ignoreComments: false,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
        }],

        // 强制最大行数
        'max-lines': 'off',

        // 强制回调函数最大嵌套深度
        'max-nested-callbacks': 'off',

        // 强制函数定义中最多允许的参数数量
        'max-params': ['off', 3],

        // 强制函数块最多允许的的语句数量
        'max-statements': ['off', 10],

        // 强制每一行中所允许的最大语句数量
        'max-statements-per-line': ['off', { max: 1 }],

        // 强制对多行注释使用特定风格
        'multiline-comment-style': ['off', 'starred-block'],

        // 要求或禁止在三元操作数中间换行
        'multiline-ternary': ['off', 'never'],

        // 要求构造函数首字母大写
        'new-cap': ['error', {
            newIsCap: true,
            newIsCapExceptions: [],
            capIsNew: false,
            capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
        }],

        // 要求调用无参构造函数时有圆括号
        'new-parens': 'error',

        // 要求方法链中每个调用都有一个换行符
        'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],

        // 禁用 Array 构造函数
        'no-array-constructor': 'error',

        // 禁用按位运算符
        'no-bitwise': 'error',

        // 禁用 continue 语句
        'no-continue': 'error',

        // 禁止在代码后使用内联注释
        'no-inline-comments': 'off',

        // 禁止 if 作为唯一的语句出现在 else 语句中
        'no-lonely-if': 'error',

        // 禁止混合使用不同的操作符
        'no-mixed-operators': ['error', {
            // the list of arthmetic groups disallows mixing `%` and `**`
            // with other arithmetic operators.
            groups: [
                ['%', '**'],
                ['%', '+'],
                ['%', '-'],
                ['%', '*'],
                ['%', '/'],
                ['**', '+'],
                ['**', '-'],
                ['**', '*'],
                ['**', '/'],
                ['&', '|', '^', '~', '<<', '>>', '>>>'],
                ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
                ['&&', '||'],
                ['in', 'instanceof'],
            ],
            allowSamePrecedence: false,
        }],

        // 禁止空格和 tab 的混合缩进
        'no-mixed-spaces-and-tabs': 'error',

        // 禁止连续赋值
        'no-multi-assign': ['error'],

        // 禁止出现多行空行
        'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1, maxBOF: 0 }],

        // 禁用否定的表达式
        'no-negated-condition': 'off',

        // 禁用嵌套的三元表达式
        'no-nested-ternary': 'off',

        // 禁用 Object 的构造函数
        'no-new-object': 'error',

        // 禁用一元操作符 ++ 和 --
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

        // 禁用特定的语法
        'no-restricted-syntax': [
            'error',
            {
                selector: 'ForInStatement',
                message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
            },
            {
                selector: 'ForOfStatement',
                message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
            },
            {
                selector: 'LabeledStatement',
                message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
            },
            {
                selector: 'WithStatement',
                message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
            },
        ],

        // 禁用 tab
        'no-tabs': 'error',

        // 禁用三元操作符
        'no-ternary': 'off',

        // 禁用行尾空格
        'no-trailing-spaces': ['error', {
            skipBlankLines: true,
            ignoreComments: true,
        }],

        // 禁止标识符中有悬空下划线
        'no-underscore-dangle': ['error', {
            allow: [],
            allowAfterThis: false,
            allowAfterSuper: false,
            enforceInMethodNames: false,
        }],

        // 禁止可以在有更简单的可替代的表达式时使用三元操作符
        'no-unneeded-ternary': ['error', { defaultAssignment: false }],

        // 禁止属性前有空白
        'no-whitespace-before-property': 'error',

        // 强制单个语句的位置
        'nonblock-statement-body-position': ['error', 'beside', { overrides: {} }],

        // 强制大括号内换行符的一致性
        'object-curly-newline': ['error', {
            ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
            ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
            ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
            ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
        }],

        // 强制在大括号中使用一致的空格
        'object-curly-spacing': ['error', 'always'],

        // 强制将对象的属性放在不同的行上
        'object-property-newline': ['error', {
            allowAllPropertiesOnSameLine: true,
        }],

        // 强制函数中的变量要么一起声明要么分开声明
        'one-var': ['error', 'never'],

        // 要求或禁止在变量声明周围换行
        'one-var-declaration-per-line': ['error', 'always'],

        // 要求或禁止在可能的情况下使用简化的赋值操作符
        'operator-assignment': ['error', 'always'],

        // 强制操作符使用一致的换行符
        'operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],

        // 要求或禁止块内填充
        'padded-blocks': ['error', { blocks: 'never', classes: 'never', switches: 'never' }],

        // 要求或禁止在语句间填充空行
        'padding-line-between-statements': 'off',

        // 要求对象字面量属性名称用引号括起来
        'quote-props': ['error', 'consistent-as-needed', { keywords: true }],

        // 强制使用一致的反勾号、双引号或单引号
        'quotes': ['error', 'single', { avoidEscape: true }],

        // 要求使用 JSDoc 注释
        'require-jsdoc': 'off',

        // 要求或禁止使用分号代替 ASI
        'semi': ['error', 'always'],

        // 强制分号之前和之后使用一致的空格
        'semi-spacing': ['error', { before: false, after: true }],

        // 强制分号的位置
        'semi-style': ['error', 'last'],

        // 要求对象属性按序排列
        'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }],

        // 要求同一个声明块中的变量按顺序排列
        'sort-vars': 'off',

        // 强制在块之前使用一致的空格
        'space-before-blocks': 'error',

        // 强制在 function的左括号之前使用一致的空格
        'space-before-function-paren': ['error', {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always',
        }],

        // 强制在圆括号内使用一致的空格
        'space-in-parens': ['error', 'never'],

        // 要求操作符周围有空格
        'space-infix-ops': 'error',

        // 强制在一元操作符前后使用一致的空格
        'space-unary-ops': ['error', {
            words: true,
            nonwords: false,
            overrides: {
            },
        }],

        // 强制在注释中 // 或 /* 使用一致的空格
        'spaced-comment': ['error', 'always', {
            line: {
                exceptions: ['-', '+'],
                markers: ['=', '!'], // space here to support sprockets directives
            },
            block: {
                exceptions: ['-', '+'],
                markers: ['=', '!'], // space here to support sprockets directives
                balanced: true,
            },
        }],

        // 强制在 switch 的冒号左右有空格
        'switch-colon-spacing': ['error', { after: true, before: false }],

        // 要求或禁止在模板标记和它们的字面量之间有空格
        'template-tag-spacing': ['error', 'never'],

        // 要求或禁止 Unicode 字节顺序标记 (BOM)
        'unicode-bom': ['error', 'never'],

        // 要求正则表达式被括号括起来
        'wrap-regex': 'off',
    },
};
