const path = require('path')
module.exports ={
    mode:"development",
    //entry point of project
    entry:"./src/app.ts",
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist'),
        publicPath:"dist"
    },
    devtool:"inline-source-map",//generate
    module:{
        rules:[
            {
                test: /\.ts$/,
                use:"ts-loader",
                exclude: /node_modules/,

            }
        ]
    },
    resolve:{
        extensions:['.ts','.js']
    }
}