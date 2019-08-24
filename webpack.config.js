const path = require('path');
const HWP = require('html-webpack-plugin');

module.exports = {
    entry : path.join(__dirname,'/src/index.js'),
    output:{
        filename:"bundle.js",
        path: path.join(__dirname,"/dist"),
    },
    plugins:[
        new HWP({
            template:path.join(__dirname,"/public/index.html")
        })
    ],
    module:{
        rules:[ 
            {
              test: /\.js$/,
              include: path.join(__dirname, 'src'),
              use: ['babel-loader']
            },{
                test: /\.css$/,
                use: [
                  // style-loader
                  { loader: 'style-loader' },
                  // css-loader
                  {
                    loader: 'css-loader',
                    options: {
                      modules: true
                    }
                  }
                ]
              },
              {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
              }
    ]
    }



}
