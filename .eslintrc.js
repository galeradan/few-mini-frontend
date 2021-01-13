module.exports = {
    extends: ["airbnb-typescript-prettier"],
    rules: {
        'react/destructuring-assignment': 0,
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off'
      },
    settings: {
        "import/resolver": {
          typescript: {} // this loads <rootdir>/tsconfig.json to eslint
        },
      },
  };