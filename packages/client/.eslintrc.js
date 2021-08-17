const fs = require("fs");
const path = require("path");

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, ".prettierrc"), "utf8")
);

module.exports = {
  extends: ["airbnb", "airbnb/hooks", "react-app", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["error", prettierOptions],
    "import/prefer-default-export": 0,
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".tsx", ".ts"] },
    ],
    "no-param-reassign": ["error", { props: false }],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
      },
    ],
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        labelComponents: ["label"],
        labelAttributes: ["htmlFor"],
        controlComponents: ["Input"],
        depth: 3,
      },
    ],
  },
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      rules: { "prettier/prettier": ["warn", prettierOptions] },
    },
  ],
};
