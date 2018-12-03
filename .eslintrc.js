module.exports = {
  "extends": ["standard", "react-app"],
  "globals": {
    "self": false,
    "$": false,
    "Turbolinks": false,
    "Stripe": false
  },
  "plugins": [],
  "parser": "babel-eslint",
  "rules": {
    "curly": ["error", "multi-or-nest", "consistent"],
    "no-eval": "off",
    "no-multi-spaces": ["error", { exceptions: {
      "VariableDeclarator": true,
      "ImportDeclaration": true
    } }],
    "no-return-assign": "off",
    "space-before-function-paren": ["error", "never"]
  }
};
