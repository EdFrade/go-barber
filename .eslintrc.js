module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'prettier'
  ],
  plugins:['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "prettier/prettier":"error",
    //Não obriga a utilização do this nas classes
    "class-methods-use-this":"off",
    //Aceita modificar os paramêtros
    "no-param-reassign":"off",
    "camelcase":"off",
    //Somente variveis com o nome next podem ser inutilizadas
    "no-unused-vars":["error",{"argsIgnorePattern": "next"}]
  },
};
