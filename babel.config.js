module.exports = {
  presets: ['module:@react-native/babel-preset'],
  env: {
    production: {
      plugins: [
        'transform-remove-console',
        'react-native-paper/babel',
        'react-native-reanimated/plugin',
      ],
    },
  },
};
