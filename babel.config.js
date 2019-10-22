module.exports = {
  "presets": ["module:metro-react-native-babel-preset"],
  "sourceMaps": "inline",
  "plugins": [
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ]
  ]
};
