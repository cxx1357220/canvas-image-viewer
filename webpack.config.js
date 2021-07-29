const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: __dirname + "/src/js/imageViewer.js",//唯一入口文件 
    output: {
        path: __dirname + "/dist",//打包后的文件存放的地方 
        filename: "index.js"//打包后输出文件的文件名 
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "index.css"
        }),
    ] 
}