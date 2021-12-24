const path = require("path/posix")

module.exports = {
    entry:"./src/index.js",
    output:{
        path: path.join(__dirname,"build"),
        filename:"bundle.js"
    },
    mode:"production",
    module:{
        rules:[
            {
                test: /\.css$/,
                use:["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use:['file-loader']
            }
        ]
        
    }
}