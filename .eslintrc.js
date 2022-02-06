module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "next",
    // "airbnb",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    // "plugin:react/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "react-hooks"],
  rules: {
    "react/destructuring==assignment": "off",
    "react/react-in-jsx-scope": "off",
    "react/destructuring-assignment": "off",
    "no-param-reassign": "off",
    camelcase: "off",
    curly: ["error", "all"],
    "import/order": [
      "error",
      {
        "newlines-between": "ignore",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
};
