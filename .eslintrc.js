module.exports = {
  extends: ["airbnb", "plugin:prettier/recommended"],
  parser: "babel-eslint",
  rules: {
    "import/prefer-default-export": 0
  },
  env: { browser: true }
};
