module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
      "standard-with-typescript",
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended"],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{ts,cjs,js}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "prettier/prettier": ["error"],
        "no-unused-vars": "error",
        "@typescript-eslint/no-unused-vars": ["error"],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-non-null-assertion": "warn",
        "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
       
    }
}
