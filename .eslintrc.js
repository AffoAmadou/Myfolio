module.exports = {
  root: true,
  extends: ['standard'],
  globals: {
    IS_DEVELOPMENT: 'readonly'
  },
  parserOptions: {
    ecmasVersion: 2022
  },
  rules: {
    indent: ['error', 2], // Regola di indentazione
    'import/named': 'error', // Verifica gli import nominati
    'import/default': 'error', // Verifica gli import di default
    'import/namespace': 'error', // Verifica gli import di namespace
    'import/export': 'error', // Verifica gli export
    'import/no-unused-modules': [1, { unusedExports: true }] // Rimuove gli import non utilizzati
  }
}
