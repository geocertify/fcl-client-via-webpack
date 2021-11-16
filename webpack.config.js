var path = require('path');

module.exports = {
    context: path.join(__dirname, 'src'), // resolves entry below, must be absolute path
    entry: './main.js',
    mode: 'development',
    output: {
        path: path.join(__dirname, 'public'), 
        filename: 'main_w_fcl_client.js',
        publicPath: 'public'
    }
};