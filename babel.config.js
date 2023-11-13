module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            utils: './src/utils',
            hooks: './src/hooks',
            components: './src/components',
            features: './src/features',
            theme: './src/theme',
          },
        },
      ],
    ],
  };
};
