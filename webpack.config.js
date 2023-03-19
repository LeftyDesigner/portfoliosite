const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const fs = require('fs');
const devMode = process.env.NODE_ENV !== 'production';
const CopyPlugin = require("copy-webpack-plugin");

function generateHtmlPlugins (templateDir, subDir) {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir))
  return templateFiles.filter(file => path.extname(file)==".twig").map(file => {
    const components = path.parse(file);   
    const f = `${templateDir}/${components.name}${components.ext}`;
    const template = path.resolve(__dirname,f);
    const outfile = `${subDir}/${components.name}.html`;
    console.log(template,'=>', outfile);

    return new HtmlWebpackPlugin({
        filename: outfile,
        template: template
      })
  })
}

module.exports = {
  entry: {
    'dummy': './dummy.js'
  },
  module: {
    rules: [      
      {
        test: /\.twig$/,
        use: [
          'raw-loader',
          'twig-html-loader',    
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
    },
    {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              includePaths: ['node_modules/compass-sass-mixins/lib']
            }
          }
        }]
    },
     { test: /\.svg$/, use: ['file-loader'] },
    { test: /\.gif$/, use: ['file-loader'] },
    { test: /\.woff2$/, use: ['file-loader'] },
    { test: /\.woff$/, use: ['file-loader'] },
    { test: /\.ttf$/, use: ['file-loader'] },
    { test: /\.eot$/, use: ['file-loader'] },
    { test: /\.png$/, use: ['file-loader'] },
      // ...
    ]
  },
  plugins: [
      new MiniCssExtractPlugin(),
      new CopyPlugin({
        patterns: [
          { from: "images", to: "images" },          
          { from: "js", to: "js" }
        ],
      }),
    ]
    .concat(generateHtmlPlugins('./views','.'))
    .concat(generateHtmlPlugins('./views/lgfcu-wireframes','lgfcu-wireframes')),

  output: {
    publicPath: '',
  },
};