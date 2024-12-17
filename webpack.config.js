const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx', // Main entry point
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/, // Transpile JS and JSX files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/, // Handle CSS files
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i, // Handle images
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'], // Resolve JS and JSX extensions
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // Use index.tsx as a template
        }),
    ],
    devServer: {
        static: './dist',
        port: 3000,
        hot: true,
        open: true,
    },
    mode: 'development',
};
