module.exports = {
  plugins: [
    'hapi'
  ],
  env: {
    node: true
  },
  rules: {
    'hapi/hapi-capitalize-modules': [1, 'global-scope-only'],
    'hapi/hapi-scope-start': 1,
    'no-shadow': [1, { 'allow': ['err', 'done'] }],

    'array-bracket-spacing': 1,
    'brace-style': [1, 'stroustrup'],
    'camelcase': 0,
    'comma-dangle': [2, 'never'],
    'consistent-return': 0,
    'consistent-this': [2, 'self'],
    'curly': [2, 'all'],
    'dot-notation': 1,
    'eol-last': 1,
    'eqeqeq': 2,
    'func-style': [2, 'expression'],
    'handle-callback-err': 0,
    'indent': [2, 2, { SwitchCase: 1 }],
    'new-cap': 0,
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-catch-shadow': 0,
    'no-console': 0,
    'no-constant-condition': 0,
    'no-else-return': 2,
    'no-empty': 0,
    'no-eq-null': 1,
    'no-eval': 2,
    'no-ex-assign': 2,
    'no-extend-native': 1,
    'no-lonely-if': 0,
    'no-loop-func': 1,
    'no-mixed-spaces-and-tabs': 2,
    'no-native-reassign': 0,
    'no-new-object': 2,
    'no-new-wrappers': 2,
    'no-process-exit': 0,
    'no-redeclare': 1,
    'no-regex-spaces': 0,
    'no-return-assign': 2,
    'no-spaced-func': 2,
    'no-sparse-arrays': 2,
    'no-trailing-spaces': 1,
    'no-undef': 0,
    'no-underscore-dangle': 0,
    'no-unused-expressions': 0,
    'no-unused-vars': [1, { vars: 'all', varsIgnorePattern: '^internals$', args: 'none' }],
    'no-use-before-define': 2,
    'object-curly-spacing': [2, 'always'],
    'one-var': [2, 'never'],
    'quotes': [2, 'single'],
    'semi': [2, 'always'],
    'semi-spacing': [2, { before: false, after: true }],
    'sort-vars': 1,
    'space-after-keywords': 2,
    'space-before-function-paren': 2,
    'space-infix-ops': 2,
    'space-return-throw-case': 2,
    'space-unary-ops': [1, { words: true, nonwords: false }],
    'strict': [2, 'global'],
    'vars-on-top': 0,
    'yoda': [1, 'never']
  }
};
