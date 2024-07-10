// webpack.config.js

const Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .addEntry('app', './assets/js/app.js') // Votre fichier JavaScript principal
    .addStyleEntry('styles', './assets/css/app.scss') // Votre fichier SCSS principal
    .enableSassLoader() // Si vous utilisez SCSS
    .enableSingleRuntimeChunk()
    .configureCssLoader(options => {
        if (!Encore.isProduction()) {
            options.modules = {
                localIdentName: '[name]_[local]_[hash:base64:5]',
            };
        }
    });

module.exports = Encore.getWebpackConfig();