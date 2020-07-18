module.exports = {
  
  entry: './assets/js/scripts.js',
  output: {
    filename: './js/bundle.js'
  },

  module:{
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }

};