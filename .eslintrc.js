module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "prettier/prettier": ["error", { singleQuote: true }],
    quotes: "double",
    "react-native/react-in-jsx-scope": "off",
    "no-unused-vars": "warn",
  },
  settings: {
    react: {
      createClass: "createReactClass", // Regex for Component Factory to use,
      pragma: "React", // Pragma to use, default to "React"
      fragment: "Fragment", // Fragment to use (may be a property of <pragma>), default to "Fragment"
      version: "detect", // React version. "detect" automatically picks the version you have installed.

      flowVersion: "0.53", // Flow version
    },
    propWrapperFunctions: [
      "forbidExtraProps",
      { property: "freeze", object: "Object" },
      { property: "myFavoriteWrapper" },
    ],
    linkComponents: ["Hyperlink", { name: "Link", linkAttribute: "to" }],
    "import/resolver": {
      node: {
        paths: ["src"],
        alias: {
          _assets: "./src/assets",
          _components: "./src/components",
          _atoms: "./src/components/atoms",
          _molecules: "./src/components/molecules",
          _organisms: "./src/components/organisms",
          _navigations: "./src/navigations",
          _scenes: "./src/scenes",
          _services: "./src/services",
          _styles: "./src/styles",
          _utils: "./src/utils",
          _redux: "./src/redux",
          _context: "./src/context",
        },
      },
    },
  },
};
