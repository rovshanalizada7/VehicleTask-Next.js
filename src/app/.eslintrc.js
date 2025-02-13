module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:jsx-a11y/recommended', 
      'plugin:import/errors', 
      'plugin:import/warnings',
      'plugin:react-hooks/recommended', 
      'prettier', 
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: ['react', 'react-hooks', 'jsx-a11y', 'import', 'prettier'],
    rules: {
      'prettier/prettier': 'error',
      'react/prop-types': 'off', 
      'react/react-in-jsx-scope': 'off', 
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
  