module.exports = {
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module"
    },
    env: {
        es6: true,
        node: true,
        browser: true
    },
    plugins: [
        "wdio"
    ],
    extends: "plugin:wdio/recommended",
    rules: {
        "consistent-return": 0,
        "no-console": 0
    }
}