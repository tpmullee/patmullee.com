'use strict';

const path = require('path');
const S3Plugin = require('webpack-s3-plugin');

const webpackConfig = require('./webpack.config');

function getBasePath(extension) {
    return path.join(require('./package').version, extension || '');
}

function getConfig(config) {
    const plugins = config.plugins;
    const extendedPlugins = plugins.concat([
        new S3Plugin({
            s3Options: {
                region: "us-east-1"
            },
            s3UploadOptions: {
                Bucket: "patmullee.com"
            },
            basePathTransform: getBasePath,
            include: /index\.html$/
        }),
        new S3Plugin({
            s3Options: {
                region: "us-east-1"
            },
            s3UploadOptions: {
                Bucket: "patmullee.com"
            },
            basePathTransform: getBasePath.bind(null, 'public'),
            directory: 'public'
        })
    ]);

    return Object.assign({}, config, {
        plugins: extendedPlugins
    });
}

module.exports = getConfig(webpackConfig);
