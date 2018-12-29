module.exports = {
  presets: [
    // @babel/env config
    [
      '@babel/env',
      {
        targets: {
          node: '6.10'
        },
        useBuiltIns: 'usage',
        debug: false
      }
    ]
  ],
  plugins: ['@babel/plugin-proposal-object-rest-spread']
};
